import { db } from './db';

export type IngredientIn = {
    ingredient_name: string;
    amount: number | null;
    unit: string | null;
    optional?: boolean;
};

export type StepIn = {
    step_number: number;
    instruction: string;
};

export async function importCocktail(payload: any) {
    const name = payload.cocktail_name || payload.name || null;
    const description = payload.cocktail_description || payload.description || null;
    const ingredients: IngredientIn[] = payload.ingredients || [];
    const steps: StepIn[] = payload.steps || [];

    if (!name) {
        throw { status: 400, message: 'Missing cocktail name' };
    }

    if (!Array.isArray(ingredients) || ingredients.length === 0) {
        throw { status: 400, message: 'No ingredients provided - import skipped' };
    }

    await db.exec('BEGIN TRANSACTION;');
    try {
        // If a cocktail with the same name exists, remove it first (replace behavior)
        const existing = await db.get(
            `SELECT Cocktail_ID AS id FROM Cocktail WHERE Name = ? COLLATE NOCASE`,
            [name]
        );

        if (existing && existing.id) {
            await db.run(`DELETE FROM Step WHERE Cocktail_ID = ?`, [existing.id]);
            await db.run(`DELETE FROM Cocktail_Ingredient WHERE Cocktail_ID = ?`, [existing.id]);
            await db.run(`DELETE FROM Cocktail WHERE Cocktail_ID = ?`, [existing.id]);
        }

        const res = await db.run(`INSERT INTO Cocktail (Name, Description) VALUES (?, ?)`, [name, description]);
        const cocktailId = res.lastID as number;

        for (const ing of ingredients) {
            const ingName = (ing.ingredient_name || '').trim();
            if (!ingName) continue;
            const existingIng = await db.get(`SELECT Ingredient_ID AS id FROM Ingredient WHERE Name = ? COLLATE NOCASE`, [ingName]);
            let ingredientId: number;
            if (existingIng && existingIng.id) {
                ingredientId = existingIng.id;
            } else {
                const r = await db.run(`INSERT INTO Ingredient (Name) VALUES (?)`, [ingName]);
                ingredientId = r.lastID as number;
            }

            await db.run(
                `INSERT INTO Cocktail_Ingredient (Cocktail_ID, Ingredient_ID, Amount, Unit, Optional) VALUES (?, ?, ?, ?, ?)`,
                [cocktailId, ingredientId, ing.amount ?? null, ing.unit ?? null, ing.optional ? 1 : 0]
            );
        }

        if (Array.isArray(steps) && steps.length > 0) {
            for (const s of steps) {
                const num = Number(s.step_number) || null;
                const instr = (s.instruction || '').toString();
                await db.run(`INSERT INTO Step (Cocktail_ID, Number, Description) VALUES (?, ?, ?)`, [cocktailId, num, instr]);
            }
        }

        await db.exec('COMMIT;');
        return { cocktail_id: cocktailId };
    } catch (err) {
        await db.exec('ROLLBACK;');
        console.error('import error', err);
        throw { status: 500, message: 'Import failed' };
    }
}

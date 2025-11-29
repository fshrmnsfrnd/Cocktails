import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
    // No Authorization because it doesnt write on the Server and Database
    
    try {
        //Get Param
        const body = await req.json();
        const ids = Array.isArray(body) ? body : body?.ids;

        if (!Array.isArray(ids)) {
            return NextResponse.json({ error: 'Expected an array of ingredient IDs' }, { status: 400 });
        }

        //Get the Cocktails
        const dbRes = await db.all(
            `SELECT DISTINCT CI.Cocktail_ID
            FROM Cocktail_Ingredient CI
            WHERE CI.Ingredient_ID IN (${ids})
            ORDER BY CI.Cocktail_ID;`,
        );

        const cocktailIds = Array.from(new Set(dbRes.map(row => row.Cocktail_ID)));

        return NextResponse.json(cocktailIds);
    } catch (ex) {
        console.error('Error in cocktailsFilteredByMustHaveIngredients', ex);
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}

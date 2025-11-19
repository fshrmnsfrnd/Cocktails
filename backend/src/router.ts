import express from "express";
import { db } from "./db.ts";

export const router = express.Router();

router.get("/cocktails", async (req, res) => {
    const cocktails = await db.all("SELECT Name, Description FROM Cocktail");
    res.json(cocktails);
});

router.get("/cocktail", async (req, res) => {
    const id = req.query.id;
    if (!id) {
        return res.status(400).json({ error: "Missing id query parameter" });
    }

    const cocktails = await db.all(
        `SELECT
            Cocktail.Cocktail_ID AS cocktail_id,
            Cocktail.Name AS cocktail_name,
            Cocktail.Description AS cocktail_description,
            Ingredient.Ingredient_ID AS ingredient_id,
            Ingredient.Name AS ingredient_name,
            Step.Step_ID AS step_id,
            Step.Number AS step_number,
            Step.Description AS step_description
        FROM Cocktail
        LEFT JOIN Cocktail_Ingredient ON Cocktail.Cocktail_ID = Cocktail_Ingredient.Cocktail_ID
        LEFT JOIN Ingredient ON Ingredient.Ingredient_ID = Cocktail_Ingredient.Ingredient_ID
        LEFT JOIN Step ON Step.Cocktail_ID = Cocktail.Cocktail_ID
        WHERE Cocktail.Cocktail_ID = ?
        ORDER BY Step.Number ASC
        `,
        [id]
    );

    res.json(cocktails);
});
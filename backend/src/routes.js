import express from "express";
import { db } from "./db.js";

export const router = express.Router();

router.get("/cocktails", async (req, res) => {
    const cocktails = await db.cocktail.findMany({
        include: {
            category: true,
            ingredients: {
                include: { ingredient: true }
            }
        }
    });

    res.json(cocktails);
});


router.get("/categories", async (req, res) => {
    const categories = await db.category.findMany();
    res.json(categories);
});
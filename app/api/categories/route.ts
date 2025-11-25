import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: Request) {
    const sql = `
        SELECT DISTINCT ca.Category_ID, ca.Name
        FROM Category ca
        JOIN Cocktail_Category cc
            ON ca.Category_ID = cc.Category_ID
        ORDER BY ca.Name ASC;
    `;
    
    const categories = await db.all(sql);
    return NextResponse.json(categories);
} `
        SELECT DISTINCT ca.Category_ID, ca.Name
        FROM Category ca
        JOIN Cocktail_Category cc
            ON ca.Category_ID = cc.Category_ID
        ORDER BY ca.Name ASC;
    `
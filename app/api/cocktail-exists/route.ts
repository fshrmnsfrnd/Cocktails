import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const name = (body.cocktail_name || body.name || '').toString().trim();

        if (!name) {
            return NextResponse.json({ error: 'Missing cocktail name' }, { status: 400 });
        }

        // find cocktail (case-insensitive)
        const cocktail = await db.get(
            `SELECT Cocktail_ID AS id, Name FROM Cocktail WHERE Name = ? COLLATE NOCASE`,
            [name]
        );

        if (!cocktail) {
            return NextResponse.json({ exists: false });
        }
        
        return NextResponse.json({ exists: true, cocktail_id: cocktail.id });
    } catch (ex) {
        console.error('bad request', ex);
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }
}
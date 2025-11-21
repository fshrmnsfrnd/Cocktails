import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
    const cocktails = await db.all("SELECT Cocktail_ID, Name, Description FROM Cocktail ORDER BY Name");
    return NextResponse.json(cocktails)
}
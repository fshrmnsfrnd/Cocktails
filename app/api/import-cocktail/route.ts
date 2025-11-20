import { NextRequest, NextResponse } from 'next/server';
import { importCocktail } from '@/lib/importCocktail';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        try {
            const res = await importCocktail(body);
            return NextResponse.json(res, { status: 201 });
        } catch (err: any) {
            return NextResponse.json({ error: err.message || 'Import failed' }, { status: err.status || 500 });
        }
    } catch (ex) {
        console.error('bad request', ex);
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }
}

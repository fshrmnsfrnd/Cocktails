import React, { useEffect, useState } from "react";


export default function App() {
    const [cocktails, setCocktails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [headers, setHeaders] = useState([]);
    const [selected, setSelected] = useState(null);

    async function loadCocktails() {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("http://localhost:3000/api/cocktails");
            const ct = res.headers.get("content-type") || "";
            let data;
            if (ct.includes("application/json")) data = await res.json();
            else data = await res.text();

            setCocktails(data);
            if (Array.isArray(data) && data.length > 0) {
                setHeaders(Object.keys(data[0]));
            } else {
                setHeaders([]);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
            setCocktails(null);
            setHeaders([]);
        } finally {
            setLoading(false);
        }
    }

    async function showDetails(id) {
        console.log("showDetails called with id:", id);
        if (!id) return;
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:3000/api/cocktail?id=${id}`);
            if (!res.ok) {
                throw new Error(`API returned ${res.status}`);
            }
            const data = await res.json();

            // transform rows into structured object
            if (!Array.isArray(data) || data.length === 0) {
                setSelected({ name: 'Not found', description: '', ingredients: [], steps: [] });
                return;
            }

            const first = data[0];
            const name = first.cocktail_name ?? first.Name ?? '';
            const description = first.cocktail_description ?? first.Description ?? '';

            const ingredientsMap = new Map();
            const stepsMap = new Map();

            data.forEach((r) => {
                if (r.ingredient_id && r.ingredient_name) ingredientsMap.set(r.ingredient_id, { id: r.ingredient_id, name: r.ingredient_name });
                if (r.step_id) stepsMap.set(r.step_id, { id: r.step_id, number: r.step_number, description: r.step_description });
            });

            const ingredients = Array.from(ingredientsMap.values());
            const steps = Array.from(stepsMap.values()).sort((a,b)=> (a.number||0)-(b.number||0));

            setSelected({ name, description, ingredients, steps });
            console.log("selected:", { name, description, ingredients, steps });
        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : String(err));
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h1>Cocktails</h1>

            <div style={{ marginBottom: 12 }}>
                <button onClick={loadCocktails} disabled={loading}>
                    {loading ? "Loading…" : "Load Cocktails"}
                </button>
            </div>

            {error && <div style={{ color: "red" }}>Error: {error}</div>}

            {typeof cocktails === "string" && (
                <div>{cocktails}</div>
            )}

            {Array.isArray(cocktails) && cocktails.length === 0 && (
                <div>No records found.</div>
            )}

            {Array.isArray(cocktails) && cocktails.length > 0 && (
                <table border="1" cellPadding="6" style={{ borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            {headers.map((h) => (
                                <th key={h}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {cocktails.map((row, idx) => {
                            const rowId = row.Cocktail_ID ?? row.cocktail_id ?? row.id ?? idx;
                            return (
                                <tr
                                    key={rowId}
                                    role="button"
                                    tabIndex={0}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => showDetails(rowId)}
                                    onKeyDown={(e) => { if (e.key === 'Enter') showDetails(rowId); }}
                                >
                                    {headers.map((h) => (
                                        <td key={h}>{String(row[h] ?? "")}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}

            {selected && (
                <div style={{ marginTop: 16, padding: 12, border: '1px solid #ccc' }}>
                    <h2>{selected.name}</h2>
                    <p>{selected.description}</p>

                    <h3>Ingredients</h3>
                    <ul>
                        {selected.ingredients.map((i) => (
                            <li key={i.id}>{i.name}</li>
                        ))}
                    </ul>

                    <h3>Steps</h3>
                    <ol>
                        {selected.steps.map((s) => (
                            <li key={s.id}>{s.number}. {s.description}</li>
                        ))}
                    </ol>
                </div>
            )}

            {cocktails && typeof cocktails === "object" && !Array.isArray(cocktails) && (
                <pre>{JSON.stringify(cocktails, null, 2)}</pre>
            )}
        </div>
    );
}
module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/sqlite3 [external] (sqlite3, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("sqlite3", () => require("sqlite3"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/cocktails/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$sqlite3__$5b$external$5d$__$28$sqlite3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/sqlite3 [external] (sqlite3, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sqlite$2f$build$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sqlite/build/index.mjs [app-route] (ecmascript) <locals>");
;
;
const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sqlite$2f$build$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["open"])({
    filename: "./db.db",
    driver: __TURBOPACK__imported__module__$5b$externals$5d2f$sqlite3__$5b$external$5d$__$28$sqlite3$2c$__cjs$29$__["default"].Database
});
await db.exec(`
    DROP TABLE IF EXISTS Cocktail;
    DROP TABLE IF EXISTS Step;
    DROP TABLE IF EXISTS Ingredient;
    DROP TABLE IF EXISTS Cocktail_Ingredient;
`);
await db.exec(`
    CREATE TABLE IF NOT EXISTS Cocktail (
        Cocktail_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Name TEXT,
        Description TEXT
    );

    CREATE TABLE IF NOT EXISTS Step (
        Step_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Cocktail_ID INTEGER,
        Number INTEGER,
        Description TEXT,
        FOREIGN KEY (Cocktail_ID) REFERENCES Cocktail(Cocktail_ID)
    );

    CREATE TABLE IF NOT EXISTS Ingredient (
        Ingredient_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Name TEXT
    );

    CREATE TABLE IF NOT EXISTS Cocktail_Ingredient (
        Cocktail_ID INTEGER,
        Ingredient_ID INTEGER,
        Amount DECIMAL,
        Unit TEXT,
        Optional BOOLEAN,
        FOREIGN KEY (Cocktail_ID) REFERENCES Cocktail(Cocktail_ID),
        FOREIGN KEY (Ingredient_ID) REFERENCES Ingredient(Ingredient_ID)
    );
`);
// Beispiel-Daten einfügen (nur einmal, bei Konflikt wird die Einfügung ignoriert)
await db.exec(`
    BEGIN TRANSACTION;

    INSERT OR IGNORE INTO Cocktail (Cocktail_ID, Name, Description) VALUES
        (1, 'Mojito', 'Erfrischender Cocktail mit Limette, Minze und Rum'),
        (2, 'Negroni', 'Bitter-süßer Cocktail mit Gin, Campari und Vermouth');

    INSERT OR IGNORE INTO Step (Step_ID, Cocktail_ID, Number, Description) VALUES
        (1, 1, 1, "Limetten und Zucker"), -- Mojito: Limetten und Zucker
        (2, 1, 2, "Minze zerstoßen"), -- Mojito: Minze zerstoßen
        (3, 1, 3, "Rum und Soda"), -- Mojito: Rum und Soda
        (4, 2, 1, "Zutaten ins Glas"), -- Negroni: Zutaten ins Glas
        (5, 2, 2, "Rühren"); -- Negroni: Rühren

    INSERT OR IGNORE INTO Ingredient (Ingredient_ID, Name) VALUES
        (1, 'Limette'),
        (2, 'Minze'),
        (3, 'Weißer Rum'),
        (4, 'Zucker'),
        (5, 'Soda'),
        (6, 'Gin'),
        (7, 'Campari'),
        (8, 'Wermut');

    INSERT OR IGNORE INTO Cocktail_Ingredient (Cocktail_ID, Ingredient_ID, Amount, Unit, Optional) VALUES
        -- Mojito
        (1, 1, 1, 'piece', 0), -- Limette
        (1, 2, 8, 'leaves', 0), -- Minze
        (1, 3, 50, 'ml', 0), -- Weißer Rum
        (1, 4, 2, 'tsp', 0), -- Zucker
        (1, 5, 50, 'ml', 0), -- Soda
        -- Negroni
        (2, 6, 30, 'ml', 0), -- Gin
        (2, 7, 30, 'ml', 0), -- Campari
        (2, 8, 30, 'ml', 0); -- Wermut

    COMMIT;
`);
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/cocktails/app/api/cocktail/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cocktails/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cocktails/node_modules/next/server.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function GET(req, { params }) {
    const id = parseInt(req.nextUrl.searchParams.get("id") || "", 10);
    if (!id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Missing id query parameter"
        }, {
            status: 400
        });
    }
    // load cocktail
    const cocktail = await __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].get(`SELECT Cocktail_ID AS cocktail_id, Name AS cocktail_name, Description AS cocktail_description
         FROM Cocktail WHERE Cocktail_ID = ?`, [
        id
    ]);
    if (!cocktail) return __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: "Cocktail not found"
    }, {
        status: 404
    });
    // load ingredients
    const ingredientsRows = await __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].all(`SELECT Ingredient.Name AS ingredient_name, CI.Amount AS amount, CI.Unit AS unit, CI.Optional AS optional
         FROM Cocktail_Ingredient AS CI
         JOIN Ingredient ON Ingredient.Ingredient_ID = CI.Ingredient_ID
         WHERE CI.Cocktail_ID = ?`, [
        id
    ]);
    const ingredients = (ingredientsRows || []).map((r)=>({
            ingredient_name: r.ingredient_name,
            amount: r.amount,
            unit: r.unit,
            optional: !!r.optional
        }));
    // load steps
    const stepsRows = await __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].all(`SELECT Number AS step_number, Description AS instruction
         FROM Step
         WHERE Cocktail_ID = ?
         ORDER BY Number ASC`, [
        id
    ]);
    const steps = (stepsRows || []).map((r)=>({
            step_number: r.step_number,
            instruction: r.instruction
        }));
    return __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        cocktail_id: cocktail.cocktail_id,
        cocktail_name: cocktail.cocktail_name,
        cocktail_description: cocktail.cocktail_description,
        ingredients,
        steps
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__62ad9022._.js.map
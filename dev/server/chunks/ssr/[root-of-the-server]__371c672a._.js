module.exports = [
"[project]/cocktails/app/favicon.ico.mjs { IMAGE => \"[project]/cocktails/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/cocktails/app/favicon.ico.mjs { IMAGE => \"[project]/cocktails/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/cocktails/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/cocktails/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/cocktails/components/AllCocktails.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AllCocktails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cocktails/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cocktails/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
function AllCocktails() {
    const [cocktails, setCocktails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    // navigation target: open recipe.html with cocktailID as query param
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadCocktails();
    }, []);
    async function loadCocktails() {
        setError(null);
        try {
            const res = await fetch("/api/cocktails");
            const ct = res.headers.get("content-type") || "";
            let data;
            if (ct.includes("application/json")) data = await res.json();
            else data = await res.text();
            if (Array.isArray(data)) {
                setCocktails(data);
            } else {
                setCocktails(null);
                setError(typeof data === 'string' ? data : 'Unexpected response');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
            setCocktails(null);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: 'red'
                },
                children: [
                    "Error: ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/cocktails/components/AllCocktails.tsx",
                lineNumber: 53,
                columnNumber: 23
            }, this),
            Array.isArray(cocktails) && cocktails.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "No records found."
            }, void 0, false, {
                fileName: "[project]/cocktails/components/AllCocktails.tsx",
                lineNumber: 55,
                columnNumber: 68
            }, this),
            Array.isArray(cocktails) && cocktails.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "cocktailList",
                children: cocktails.map((element, idx)=>{
                    const cocktailID = element.Cocktail_ID ?? element.cocktail_id ?? element.id ?? idx + 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cocktailPreview",
                        onClick: ()=>{
                            window.location = `/recipe?cocktailID=${cocktailID}`;
                        },
                        role: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: element.Name
                            }, void 0, false, {
                                fileName: "[project]/cocktails/components/AllCocktails.tsx",
                                lineNumber: 68,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: element.Description
                            }, void 0, false, {
                                fileName: "[project]/cocktails/components/AllCocktails.tsx",
                                lineNumber: 69,
                                columnNumber: 33
                            }, this)
                        ]
                    }, cocktailID, true, {
                        fileName: "[project]/cocktails/components/AllCocktails.tsx",
                        lineNumber: 62,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/cocktails/components/AllCocktails.tsx",
                lineNumber: 58,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cocktails/components/AllCocktails.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
}),
"[project]/cocktails/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cocktails/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$components$2f$AllCocktails$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cocktails/components/AllCocktails.tsx [app-rsc] (ecmascript)");
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cocktails$2f$components$2f$AllCocktails$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/cocktails/app/page.tsx",
            lineNumber: 7,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/cocktails/app/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/cocktails/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/cocktails/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__371c672a._.js.map
import React, { useEffect, useState } from "react";


export default function App() {
    const [cocktails, setCocktails] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/api/cocktails")
            .then(res => res.json())
            .then(data => setCocktails(data));
    }, []);


    return (
        <div>
            <h1>Cocktails</h1>
            <ul>
                {cocktails.map(c => (
                    <li key={c.id}>{c.name}</li>
                ))}
            </ul>
        </div>
    );
}
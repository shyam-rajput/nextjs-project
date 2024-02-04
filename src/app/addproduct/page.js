"use client"
import { useState } from "react";
import "../style.css";
export default function Page() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [company, setCompany] = useState('');

    const addProduct = async () => {
        let result = await fetch('http://localhost:3000/api/products', {
            method: "POST",
            body: JSON.stringify({ name, price, color, company })
        })
        result = await result.json();
        if (result.success) {
            alert("New Product Added")
        }
    }
    return (
        <>
            <h1>Add Products</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" className="input" />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" className="input" />
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter Product Color" className="input" />
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product Company" className="input" />
            <button className="btn" onClick={addProduct}>Add Product</button>
        </>
    )
}
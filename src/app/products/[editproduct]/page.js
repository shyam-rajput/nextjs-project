"use client"
import { useEffect, useState } from "react";
import "../../style.css";
import Link from "next/link";
export default function Page(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [company, setCompany] = useState('');

    useEffect(() => {
        getProductDetail()
    }, []);

    const getProductDetail = async () => {
        let productId = props.params.editproduct;
        let productData = await fetch(`http://localhost:3000/api/products/${productId}`);
        productData = await productData.json();
        if (productData.success) {
            let result = productData.result;
            setName(result.name);
            setPrice(result.price);
            setColor(result.color);
            setCompany(result.company);
        }
    }

    const updateProduct = async () => {
        let productId = props.params.editproduct;
        let data = await fetch(`http://localhost:3000/api/products/${productId}`, {
            method: "PUT",
            body: JSON.stringify({ name, price, color, company })
        });
        data = await data.json();
        if (data.success) {
            alert("Product has been updated");
        }
    }

    return (
        <>
            <h1>Update Products</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" className="input" />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" className="input" />
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter Product Color" className="input" />
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product Company" className="input" />
            <button className="btn" onClick={updateProduct}>Update Product</button>
            <Link href='/products'>Go to Product List</Link>
        </>
    )
}
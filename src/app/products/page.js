import DeleteProduct from "@/lib/DeleteProduct";
import Link from "next/link";

const getProduct = async () => {
    let data = await fetch('http://localhost:3000/api/products', { catch: "no-cache" });
    data = await data.json();
    if (data.success) {
        return data.result;
    } else {
        return { success: false }
    }
}

export default async function Page() {
    const products = await getProduct();
    console.log(products);
    return (
        <>
            <h1>Product List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Company</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item) => {
                            return <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.color}</td>
                                <td>{item.company}</td>
                                <td><Link href={'products/' + item._id}>Edit</Link></td>
                                <DeleteProduct id={item._id} />
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
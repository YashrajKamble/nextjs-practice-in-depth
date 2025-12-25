import Link from 'next/link'
import React from 'react'

const Products = () => {
    const productId = 100;
    return (
        <div>
            <Link href={"/"}>Home</Link>
            <h1>LinkProduct List</h1>
            <h2>
                <Link href="products/1">Product 1</Link>
            </h2>
            <h2>
                <Link href="products/2">Product 2</Link>
            </h2>
            <h2>
                <Link href="products/3" replace>Product 3</Link>
            </h2>
            <h2>
                <Link href={`/products/${productId}`}>{productId}</Link>
            </h2>
        </div>
    )
}

export default Products
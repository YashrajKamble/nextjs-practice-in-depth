import React from 'react'

export default async function ProductsDetails({ params }: { params: Promise<{ productId: string }> }) {
    const productId = (await params).productId
    return (
        <div>About Products Details {productId}</div>
    )
}


export const Product = async () => {
    await new Promise((resolve) => setTimeout(resolve, 7000))
    return <div>Product</div>
}
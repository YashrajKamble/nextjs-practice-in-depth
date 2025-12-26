import { Metadata } from "next"

type Props = {
    params: Promise<{
        productId: string
    }>
}

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise((resolved) => {
        setTimeout(() => {
            resolved(`iPhone ${id}`)
        }, 1000)
    })
    return {
        title: `Product ${title}`,
    }
}

export default async function ProductsDetails({ params }: Props) {
    const productId = (await params).productId
    return (
        <div>Details About Products {productId}</div>
    )
}




import Link from "next/link";

const Home = () => {
    return (
        <>
            <div>Welcome Home! </div>
            <Link href={"/blog"}>Blog</Link>
            <br />
            <Link href={"/products"}>Products</Link>
        </>
    )
}

export default Home
import Link from "next/link";

const Home = () => {
    return (
        <>
            <div>Welcome Home! </div>
            <Link href="/blog">Blog</Link>
            <br />
            <Link href="/products">Products</Link><br />
            <Link href="/articles/breaking-new-123?lang=en">READ IN ENGLISH</Link><br />
            <Link href="/articles/breaking-new-123?lang=fr">READ IN FRENCH</Link><br />
        </>
    )
}

export default Home
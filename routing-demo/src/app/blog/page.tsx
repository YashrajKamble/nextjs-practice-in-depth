export const metadata = {
    title: {
        absolute: "Blog"
    },
}

export default async function Blog() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Intentionally Delay")
        }, 2000);
    })
    return (
        <div>My Blog</div>
    )
}


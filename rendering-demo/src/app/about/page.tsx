import { cookies } from "next/headers"

export default async function aboutPage() {
    const cookiesStore = await cookies()
    const theme = cookiesStore.get("theme")
    console.log(theme);
    console.log("about server component")
    return <h1>About Page{new Date().toLocaleTimeString()}</h1>
}
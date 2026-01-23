import { auth, currentUser } from "@clerk/nextjs/server"

export default async function Dashboard() {
    const authObj = await auth();
    const userObj = await currentUser();

    console.log(authObj, "auth object")
    console.log(userObj, "user object")

    return <div>Dashboard</div>
}
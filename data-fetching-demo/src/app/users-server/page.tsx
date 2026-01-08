type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

export default async function UsersServer() {
    const response = fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await (await response).json()
    console.log(users)

    return (
        <ul className="space-y-4 p-4">
            {users.map((user) => {
                return (
                    <li key={user.id} className="p-4 bg-white rounded-lg text-gray-700">
                        <div className="font-bold">
                            {user.name}
                        </div>
                        <div className="text-sm">
                            <div>Username:{user.username}</div>
                            <div>Email:{user.email}</div>
                            <div>Phone:{user.phone}</div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
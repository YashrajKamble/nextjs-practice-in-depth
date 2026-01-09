type Author = {
    id: number,
    name: string
};

export async function Author({ userId }: { userId: number }) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user: Author = await response.json()
    return (
        <div className="text-sm text-gray-500">
            Written By :{" "}
            <span className="font-semibold text-gray-700 hover:text-gray-700 transition-colors">
                {user.name}
            </span>
        </div>
    )
}
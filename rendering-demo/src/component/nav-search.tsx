"use client"

import { useState } from "react"

export function NavSearch() {
    const [search, setSearch] = useState("")

    console.log("NavSearch Rendered")
    return (
        <>
            <h1>nav  search input</h1>
        </>
    )
}
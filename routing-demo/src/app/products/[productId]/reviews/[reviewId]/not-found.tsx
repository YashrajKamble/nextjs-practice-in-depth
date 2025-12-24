"use client"
import { usePathname } from "next/navigation"

export default function NotFound() {
    const pathname = usePathname() || ""
    const parts = pathname.split("/")
    const productId = parts[2] ?? null
    const reviewId = parts[4] ?? null

    return (
        <div>
            <h2>Review {reviewId ?? "—"} Not Found for product {productId ?? "—"}</h2>
        </div>
    )
}

"use client"

import Link from "next/link";
import { use } from "react";

export default function NewArticles({
    params,
    searchParams
}: {
    params: Promise<{ articlesId: string }>;
    searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) {
    const { articlesId } = use(params);
    const { lang = "en" } = use(searchParams);
    return (
        <div>
            <h1>new article id {articlesId} </h1>
            <p>reading a {lang}</p>

            <div>
                <Link href={`/articles/${articlesId}?lang=en`}>English</Link><br />
                <Link href={`/articles/${articlesId}?lang=es`}>Spanish</Link><br />
                <Link href={`/articles/${articlesId}?lang=fr`}>French</Link><br />
            </div>
        </div>
    )
}
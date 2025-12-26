"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

const navLink = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot-Password", href: "/forgot-password" },
]

export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const [input, setInput] = useState("");
    const pathName = usePathname();
    return (
        <div>
            <div>
                <input value={input} onChange={e => setInput(e.target.value)} />
            </div>
            {navLink.map((link) => {
                const isActive = pathName === link.href || (pathName.startsWith(link.href) && link.href !== "/");
                return (
                    <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>
                        {link.name}
                        <br />
                    </Link>
                )
            })}
            {children}
        </div>
    )
}

// IF WE CHANGES NAME OF THIS FILE FROM LAYOUT.TSX TO TEMPLATE.TSX , THEN THAT TIME WE NOT ABLE TO SEE THE SEE VALUE IN THE INPUT FILES WHEN WE MOVE FROM LOGIN OR FORGOT OR REGISTER PAGE LIKE HOW WE SEE IT IN LAYOUT.TSX

// SO  SEE VALUES IN LAYOUT.TSX FILE NAME AND NOT FOR TEMPLATE.TSX

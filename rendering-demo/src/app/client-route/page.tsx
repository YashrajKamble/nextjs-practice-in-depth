// import { ServerSideFunction } from "@/utils/server-utils"

// export default function ClientRoutePage() {
//     const result = ServerSideFunction()
//     return <h1>Client Route: {result} </h1>
// }

"use client"
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/component/theme-provider';
import { ClientSideFunction } from '@/utils/client-utils';

export default function ClientRoutePage() {
    const theme = useTheme()
    const result = ClientSideFunction()

    return (
        <>
            <h1 style={{ color: theme.colors.secondary }}> CLIENT ROUTE PAGE</h1 >
            <p>{result}</p>
        </>
    );
}
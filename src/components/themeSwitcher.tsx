"use client";

import { Button } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null

    return (
        <>
            {theme === 'light' ? (
                <Button variant="flat" isIconOnly={true} onClick={() => setTheme('dark')}>🌙</Button>
            ) : (
                <Button variant="flat" isIconOnly={true} onClick={() => setTheme('light')}>☀️</Button>
            )}
        </>
    )
}
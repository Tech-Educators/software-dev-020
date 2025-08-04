'use client'
import { useTheme } from "@/context/ThemeContext"

export default function UserComponent() {
    const {theme} = useTheme()
    return (
        <div className={theme}>
            <h2>All about the user</h2>
        </div>
    )
}
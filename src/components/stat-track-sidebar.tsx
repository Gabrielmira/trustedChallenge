"use client"

import * as React from "react"
import {Shield, Menu, X, User} from "lucide-react"
import {cn} from "@/lib/utils"
import {SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs"
import Link from "next/link"

export function StatTrackSidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebar = document.getElementById("stat-track-sidebar")
            const toggleButton = document.getElementById("sidebar-toggle-button")

            if (
                sidebar &&
                !sidebar.contains(event.target as Node) &&
                toggleButton &&
                !toggleButton.contains(event.target as Node) &&
                isSidebarOpen &&
                window.innerWidth < 1024
            ) {
                setIsSidebarOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isSidebarOpen])

    React.useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isSidebarOpen) {
                setIsSidebarOpen(false)
            }
        }

        document.addEventListener("keydown", handleEscKey)
        return () => {
            document.removeEventListener("keydown", handleEscKey)
        }
    }, [isSidebarOpen])

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsSidebarOpen(true)
            }
        }

        handleResize()

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <>
            <button
                id="sidebar-toggle-button"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
                aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
                aria-expanded={isSidebarOpen}
                aria-controls="stat-track-sidebar"
            >
                {isSidebarOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
            </button>

            <aside
                id="stat-track-sidebar"
                className={cn(
                    "stat-track-sidebar w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 z-40",
                    "transition-transform duration-300 ease-in-out",
                    "lg:translate-x-0",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full",
                )}
            >
                <div className="px-4 py-4 flex items-center gap-2 border-b border-gray-100">
                    <Shield className="h-5 w-5"/>
                    <span className="font-bold text-lg">StatTrackLeague</span>
                </div>

                <div className="px-4 py-6 flex flex-wrap items-center gap-2 border-b border-gray-100">
                    <SignedOut>
                        <SignInButton>
                            <button className="px-4 py-1.5 bg-black text-white text-sm font-medium rounded-md">
                                <span className="text-white">Entrar</span>
                            </button>
                        </SignInButton>
                        <SignUpButton>
                            <button className="px-4 py-1.5 bg-black text-white text-sm font-medium rounded-md">
                                <span className="text-white">Cadastro</span>
                            </button>
                        </SignUpButton>
                    </SignedOut>
                    <UserButton showName={true}/>
                </div>

                <div className="flex-1 py-4 px-4">
                    <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-50 cursor-pointer"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <User className="h-4 w-4"/>
                        <span className="text-sm font-medium">Perfil</span>
                    </Link>
                </div>
            </aside>

            {isSidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    aria-hidden="true"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </>
    )
}
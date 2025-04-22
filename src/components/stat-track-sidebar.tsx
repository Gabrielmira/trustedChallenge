"use client"

import * as React from "react"
import { ChevronDown, Home, BarChart2, Users, TrendingUp, Shield, Settings, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import {SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";

interface NavItemProps {
    icon: React.ReactNode
    label: string
    isActive?: boolean
}

const NavItem = ({ icon, label, isActive = false }: NavItemProps) => (
    <div
        className={cn(
            "flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer",
            isActive ? "bg-gray-100" : "hover:bg-gray-50",
        )}
    >
        {icon}
        <span className="text-sm font-medium">{label}</span>
    </div>
)

interface NavSectionProps {
    title: string
    children: React.ReactNode
    defaultOpen?: boolean
}

const NavSection = ({ title, children, defaultOpen = false }: NavSectionProps) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen)

    return (
        <div className="mb-2">
            <div className="flex items-center justify-between px-4 py-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <span className="text-sm font-medium">{title}</span>
                <ChevronDown
                    className={cn("h-4 w-4 text-gray-500 transition-transform", isOpen ? "transform rotate-180" : "")}
                />
            </div>
            {isOpen && <div className="mt-1">{children}</div>}
        </div>
    )
}

export function StatTrackSidebar() {
    return (
        <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0">
            {/* Logo */}
            <div className="px-4 py-4 flex items-center gap-2 border-b border-gray-100">
                <Shield className="h-5 w-5" />
                <span className="font-bold text-lg">StatTrackLeague</span>
            </div>

            {/* Search */}
            <div className="px-4 py-3">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search for a summoner..."
                        className="w-full py-2 pl-9 pr-3 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                </div>
            </div>

            {/* Auth buttons */}

            <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100">
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

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-2">
                <NavSection title="Main" defaultOpen={true}>
                    <NavItem icon={<Home className="h-4 w-4" />} label="Home" isActive={true} />
                    <NavItem icon={<BarChart2 className="h-4 w-4" />} label="Stats" />
                    <NavItem icon={<Users className="h-4 w-4" />} label="Compare" />
                    <NavItem icon={<TrendingUp className="h-4 w-4" />} label="Trends" />
                </NavSection>

                <NavSection title="Resources">
                    <NavItem icon={<Shield className="h-4 w-4" />} label="Champions" />
                    <NavItem icon={<Settings className="h-4 w-4" />} label="Settings" />
                </NavSection>
            </div>

            {/* User */}
            <div className="mt-auto p-4 border-t border-gray-100">
            </div>
        </div>
    )
}

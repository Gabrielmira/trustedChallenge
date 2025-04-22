"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function SearchForm() {
  return (
    <form className="relative w-full">
      <Label htmlFor="sidebar-search" className="sr-only">
        Search for a summoner
      </Label>
      <Input id="sidebar-search" placeholder="Search for a summoner..." className="pl-8" />
      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Button type="submit" size="sm" className="sr-only">
        Search
      </Button>
    </form>
  )
}

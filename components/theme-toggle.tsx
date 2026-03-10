"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
    const shouldBeDark = stored === "dark" || (!stored && prefersDark)
    document.documentElement.classList.toggle("dark", shouldBeDark)
    return shouldBeDark
  })

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <Button variant="outline" size="icon" onClick={toggle}>
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}

export { ThemeToggle }

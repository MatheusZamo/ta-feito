"use client"

import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { ButtonNewTask } from "./button-new-task"

const TaskHeader = () => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    window.dispatchEvent(
      new CustomEvent("taskSearch", { detail: e.target.value })
    )
  }

  return (
    <header className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-balance">
            Minhas Tarefas
          </h1>
          <p className="mt-2 text-muted-foreground">
            Organize suas tarefas diárias.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ButtonNewTask />
        </div>
      </div>
      <div className="relative">
        <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar tarefas..."
          className="p-5 h-12 bg-card"
          onChange={handleSearch}
        />
      </div>
    </header>
  )
}

export { TaskHeader }

"use client"

import { Tasks } from "./tasks"
import { TaskHeader } from "./task-header"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { Task } from "@/interfaces/task"
import localforage from "@/lib/localforage.config"

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = await localforage.getItem<Task[]>("Tasks")
      setTasks(savedTasks || [])
    }

    const handleTasksUpdate = async () => {
      const savedTasks = await localforage.getItem<Task[]>("Tasks")
      setTasks(savedTasks || [])
    }

    loadTasks()
    window.addEventListener("tasksUpdated", handleTasksUpdate)

    return () => {
      window.removeEventListener("tasksUpdated", handleTasksUpdate)
    }
  }, [])

  const handleSearchChange = (value: string) => {
    setSearch(value)
  }

  const handleVerTodas = () => {
    setSearch("")
    window.dispatchEvent(new CustomEvent("taskSearch", { detail: "" }))
  }

  const filteredTasks = tasks.filter(task => {
    if (!search) return true
    const query = search.toLowerCase()
    return (
      task.title.toLowerCase().includes(query) ||
      task.description?.toLowerCase().includes(query)
    )
  })

  const isSearching = search.length > 0

  return (
    <>
      <TaskHeader searchValue={search} onSearchChange={handleSearchChange} />
      <div className="space-y-4 mt-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Tarefas</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={isSearching ? handleVerTodas : undefined}
            disabled={!isSearching}
            className={!isSearching ? "opacity-40 cursor-not-allowed" : ""}
          >
            Ver todas
          </Button>
        </div>
        <div className="space-y-3 lg:flex lg:flex-wrap lg:space-x-3">
          <Tasks tasks={filteredTasks} />
        </div>
      </div>
    </>
  )
}

export { TaskList }

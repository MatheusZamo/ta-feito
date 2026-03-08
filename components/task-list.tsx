"use client"

import { Tasks } from "./tasks"
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

    const handleSearch = (e: Event) => {
      setSearch((e as CustomEvent<string>).detail)
    }

    loadTasks()
    window.addEventListener("tasksUpdated", handleTasksUpdate)
    window.addEventListener("taskSearch", handleSearch)

    return () => {
      window.removeEventListener("tasksUpdated", handleTasksUpdate)
      window.removeEventListener("taskSearch", handleSearch)
    }
  }, [])

  const filteredTasks = tasks.filter(task => {
    const query = search.toLowerCase()
    return (
      task.title.toLowerCase().includes(query) ||
      task.description?.toLowerCase().includes(query)
    )
  })

  return (
    <>
      <div className="space-y-4 mt-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Tarefas</h2>
          <Button variant="outline" size="sm">
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

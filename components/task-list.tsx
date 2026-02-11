"use client"

import { Tasks } from "./tasks"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { Task } from "@/interfaces/task"
import localforage from "@/lib/localforage.config"

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const loadTasks = async () => {
    // Buscar tasks existentes do LocalForage
    const savedTasks = await localforage.getItem<Task[]>("Tasks")
    setTasks(savedTasks || [])
  }

  useEffect(() => {
    loadTasks()
    //Listener para atualizar quando criar nova task
    const handleTasksUpdate = () => {
      loadTasks()
    }
    window.addEventListener("tasksUpdated", handleTasksUpdate)

    return () => {
      window.removeEventListener("tasksUpdated", handleTasksUpdate)
    }
  }, [])

  return (
    <>
      <div className="space-y-4 mt-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Tarefas</h2>
          <Button variant="outline" size="sm">
            Ver todas
          </Button>
        </div>
        <div className="space-y-3">
          <Tasks tasks={tasks} />
        </div>
      </div>
    </>
  )
}

export { TaskList }

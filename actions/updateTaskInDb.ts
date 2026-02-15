import { Task } from "@/interfaces/task"
import localforage from "@/lib/localforage.config"

const toggleTaskCompleted = async (id: string) => {
  try {
    const existingTasks = (await localforage.getItem<Task[]>("Tasks")) || []

    const updatedTasks = existingTasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )

    await localforage.setItem("Tasks", updatedTasks)
    window.dispatchEvent(new Event("tasksUpdated"))

    return updatedTasks
  } catch (erro) {
    console.error("Erro ao atualizar task:", erro)
    throw erro
  }
}

export { toggleTaskCompleted }

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

const updateTaskInDb = async (updatedTask: Task) => {
  try {
    // Busca todas as tasks
    const tasks = await localforage.getItem<Task[]>("Tasks")

    if (!tasks) {
      throw new Error("Nenhuma task encontrada")
    }

    // Encontra o índice da task que será atualizada
    const taskIndex = tasks.findIndex(task => task.id === updatedTask.id)

    if (taskIndex === -1) {
      throw new Error("Task não encontrada")
    }

    // Atualiza a task no array
    tasks[taskIndex] = updatedTask

    // Salva de volta no localforage
    await localforage.setItem("Tasks", tasks)

    return { success: true, message: "Task atualizada com sucesso!" }
  } catch (error) {
    console.error("Erro ao atualizar task:", error)
    return { success: false, message: "Erro ao atualizar task" }
  }
}

export { toggleTaskCompleted, updateTaskInDb }

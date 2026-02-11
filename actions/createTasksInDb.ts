import { Task } from "@/interfaces/task"
import localforage from "@/lib/localforage.config"

const createTaskInDb = async (newTask: Task) => {
  try {
    //Buscar tasks existentes
    const existingTasks = (await localforage.getItem<Task[]>("Tasks")) || []
    //Adicionar nova task
    const updatedTasks = [...existingTasks, newTask]
    //Salvar no Localforage
    await localforage.setItem("Tasks", updatedTasks)
    return newTask
  } catch (erro) {
    console.error("Erro ao adicionar task:", erro)
  }
}

export { createTaskInDb }

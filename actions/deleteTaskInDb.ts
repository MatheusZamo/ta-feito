import { Task } from "@/interfaces/task"
import localforage from "@/lib/localforage.config"

const deleteTaskInDb = async (taskId: string) => {
  try {
    //Buscar as tasks
    const tasks = await localforage.getItem<Task[]>("Tasks")
    //Criando um novo array, retirando a task que contem o id recebido pelo parametro
    const updatedTasks = tasks?.filter(task => task.id !== taskId)
    //Adicionando o novo array no localforage
    await localforage.setItem("Tasks", updatedTasks)
  } catch (erro) {
    console.log(erro)
  }
}

export { deleteTaskInDb }

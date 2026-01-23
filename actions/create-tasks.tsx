"use server"

import { Task } from "@/interfaces/task"
import { prisma } from "@/lib/prisma"

const CreateTasks = async (data: Task) => {
  const {
    title,
    description,
    date,
    priority,
    completed,
    category,
    time,
    period,
  } = data
  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        priority,
        completed,
        category,
        time,
        period,
      },
    })
    return { success: true, task }
  } catch (error) {
    console.log("Erro ao criar tarefa:", error)
    return { success: false, error: "Não foi possível criar a tarefa" }
  }
}

export { CreateTasks }

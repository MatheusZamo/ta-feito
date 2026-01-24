"use server"

import { prisma } from "@/lib/prisma"

const getTasks = async () => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })
    return { success: true, tasks }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      error: "Não foi possível buscar tarefas",
      tasks: [],
    }
  }
}

export { getTasks }

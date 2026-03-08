"use client"

import { useState } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Calendar, Clock, Tag } from "lucide-react"
import { SheetClose, SheetFooter } from "./ui/sheet"
import { Button } from "./ui/button"
import { Task } from "@/interfaces/task"
import { updateTaskInDb } from "@/actions/updateTaskInDb"
import { deleteTaskInDb } from "@/actions/deleteTaskInDb"
import { toast } from "sonner"

interface EditTaskProps {
  task: Task | null
  onSuccess: () => void
}

const EditTask = ({ task, onSuccess }: EditTaskProps) => {
  const [title, setTitle] = useState(task?.title ?? "")
  const [description, setDescription] = useState(task?.description ?? "")
  const [date, setDate] = useState(task?.date ?? "")
  const [time, setTime] = useState(task?.time ?? "")
  const [category, setCategory] = useState(task?.category ?? "")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!task) return

    const updatedTask: Task = {
      ...task,
      title,
      description,
      date,
      time,
      category,
    }

    try {
      const result = await updateTaskInDb(updatedTask)

      if (result.success) {
        window.dispatchEvent(new Event("tasksUpdated"))

        toast.success("Tarefa Atualizada!", {
          unstyled: true,
          classNames: {
            toast:
              "text-white bg-chart-2 px-4 py-3 rounded-lg flex items-center gap-2 shadow-md",
          },
        })

        onSuccess() // fecha o sheet apenas no sucesso
      } else {
        console.error("Erro:", result.message)
      }
    } catch (erro) {
      console.log("Erro ao editar task:", erro)
      toast.error("Erro ao atualizar tarefa!", {
        unstyled: true,
        classNames: {
          toast:
            "text-white bg-destructive px-4 py-3 rounded-lg flex items-center gap-2 shadow-md",
        },
      })
    }
  }

  const handleDeleteTask = async () => {
    await deleteTaskInDb(task?.id ?? "")
    toast.error("Tarefa Deletada!", {
      unstyled: true,
      classNames: {
        toast:
          "text-white bg-red-700 px-4 py-3 rounded-lg flex items-center gap-2 shadow-md",
      },
    })
    window.dispatchEvent(new Event("tasksUpdated"))
    onSuccess() // fecha o sheet após deletar
  }

  if (!task) {
    return <p>Carregando...</p>
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 m-5">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-sm font-medium">
          Título da Tarefa
        </Label>
        <Input
          id="title"
          placeholder="Ex: Revisar apresentação do projeto"
          value={title}
          maxLength={15}
          required
          className="h-11"
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm font-medium">
          Descrição
        </Label>
        <Textarea
          id="description"
          placeholder="Adicione detalhes sobre a tarefa..."
          maxLength={40}
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={3}
          required
        />
      </div>

      <div>
        <div className="space-y-2">
          <Label
            htmlFor="date"
            className="text-sm font-medium flex items-center gap-2"
          >
            <Calendar className="h-4 w-4 text-primary" />
            Data
          </Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
            className="h-11"
          />
          <div className="space-y-2">
            <Label
              htmlFor="time"
              className="text-sm font-medium flex items-center gap-2"
            >
              <Clock className="h-4 w-4 text-primary" />
              Horário
            </Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              className="h-11"
              required
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="category"
              className="text-sm font-medium flex items-center gap-2"
            >
              <Tag className="h-4 w-4 text-primary" />
              Categoria
            </Label>
            <Input
              id="category"
              placeholder="Ex: Trabalho, Lazer..."
              maxLength={15}
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="h-11"
              required
            />
          </div>
        </div>
      </div>

      <SheetFooter>
        <Button type="submit" className="bg-chart-2">
          Salvar Alterações
        </Button>
        <SheetClose asChild>
          <Button variant="outline" type="button">
            Cancelar
          </Button>
        </SheetClose>
        <Button variant="destructive" type="button" onClick={handleDeleteTask}>
          Excluir Tarefa
        </Button>
      </SheetFooter>
    </form>
  )
}

export { EditTask }

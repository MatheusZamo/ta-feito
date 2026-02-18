"use client"

import { useState } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Calendar, Clock, Flag, Hourglass, Tag } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { SheetClose, SheetFooter } from "./ui/sheet"
import { Button } from "./ui/button"
import { Task } from "@/interfaces/task"
import { updateTaskInDb } from "@/actions/updateTaskInDb"

interface EditTaskProps {
  task: Task | null
}

const EditTask = ({ task }: EditTaskProps) => {
  const [title, setTitle] = useState(task?.title ?? "")
  const [description, setDescription] = useState(task?.description ?? "")
  const [date, setDate] = useState(task?.date ?? "")
  const [time, setTime] = useState(task?.time ?? "")
  const [priority, setPriority] = useState<Task["priority"]>(
    task?.priority ?? "low"
  )
  const [category, setCategory] = useState(task?.category ?? "")
  const [period, setPeriod] = useState<Task["period"]>(task?.period ?? "daily")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!task) return

    const updatedTask: Task = {
      ...task,
      title,
      description,
      date,
      time,
      priority,
      category,
      period,
    }

    try {
      const result = await updateTaskInDb(updatedTask)

      if (result.success) {
        console.log("Task atualizada com sucesso!")
        window.dispatchEvent(new Event("tasksUpdated"))
      } else {
        console.error("Erro:", result.message)
      }
    } catch (erro) {
      console.log("Erro ao editar task:", erro)
    }
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
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={3}
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
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="h-11"
            />
          </div>
        </div>

        <div className="flex justify-around mt-3">
          <div className="space-y-2">
            <Label
              htmlFor="priority"
              className="text-sm font-medium flex items-center gap-2"
            >
              <Flag className="h-4 w-4 text-primary" />
              Prioridade
            </Label>
            <Select
              value={priority}
              onValueChange={(value: Task["priority"]) => setPriority(value)}
            >
              <SelectTrigger id="priority" className="h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">Alta</SelectItem>
                <SelectItem value="medium">Média</SelectItem>
                <SelectItem value="low">Baixa</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="period" className="text-sm font-medium">
              <Hourglass className="h-4 w-4 text-primary" />
              Periodo
            </Label>
            <Select
              value={period}
              onValueChange={(value: Task["period"]) => setPeriod(value)}
            >
              <SelectTrigger id="period" className="h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Diario</SelectItem>
                <SelectItem value="weekly">Semanal</SelectItem>
                <SelectItem value="monthly">Mensal</SelectItem>
                <SelectItem value="yearly">Anual</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Salvar Alterações</Button>
        </SheetClose>
        <SheetClose asChild>
          <Button variant="outline" type="button">
            Cancelar
          </Button>
        </SheetClose>
      </SheetFooter>
    </form>
  )
}

export { EditTask }

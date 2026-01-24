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
import { CreateTasks } from "@/actions/create-tasks"

const NewTask = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [priority, setPriority] = useState<Task["priority"]>("low")
  const [category, setCategory] = useState("")
  const [period, setPeriod] = useState<Task["period"]>("daily")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      date,
      time,
      priority,
      category,
      period,
      completed: false,
      createdAt: new Date().toISOString(),
    }

    CreateTasks(newTask)

    setTitle("")
    setDescription("")
    setDate("")
    setTime("")
    setPriority("low")
    setCategory("")
    setPeriod("daily")
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
          <Button type="submit" onSubmit={handleSubmit}>
            Criar Tarefa
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button variant="outline">Cancelar</Button>
        </SheetClose>
      </SheetFooter>
    </form>
  )
}
export { NewTask }

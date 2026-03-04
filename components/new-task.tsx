"use client"

import { useState } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Calendar, Clock, Tag } from "lucide-react"
import { SheetClose, SheetFooter } from "./ui/sheet"
import { Button } from "./ui/button"
import { createTaskInDb } from "@/actions/createTasksInDb"
import { toast } from "sonner"

const NewTask = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      date,
      time,
      category,
      completed: false,
      createdAt: new Date().toISOString(),
    }

    try {
      await createTaskInDb(newTask)

      window.dispatchEvent(new Event("tasksUpdated"))

      toast.success("Tarefa Criada!", {
        unstyled: true,
        classNames: {
          toast:
            "text-white bg-chart-2  px-4 py-3 rounded-lg flex items-center gap-2 shadow-md",
        },
      })

      setTitle("")
      setDescription("")
      setDate("")
      setTime("")
      setCategory("")
    } catch (erro) {
      console.log("Erro ao criar task:", erro)
    }
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
          maxLength={15}
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

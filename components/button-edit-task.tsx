import { MoreVertical } from "lucide-react"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { Task } from "@/interfaces/task"
import { useState } from "react"
import localforage from "@/lib/localforage.config"
import { EditTask } from "./edit-task"

const ButtonEditTask = ({ id }: { id: string }) => {
  const [task, setTask] = useState<Task | null>(null)
  const [open, setOpen] = useState(false)

  const handleOpenChange = async (isOpen: boolean) => {
    setOpen(isOpen)

    if (isOpen) {
      const tasks = await localforage.getItem<Task[]>("Tasks")
      if (tasks) {
        const found = tasks.find(task => task.id === id)
        setTask(found ?? null)
      }
    }
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button
          className="gap-2 shrink-0 cursor-pointer"
          variant="ghost"
          size="icon"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90%] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Editar Tarefa</SheetTitle>
          <SheetDescription>
            Faça a edição necessaria na sua tarefa.
          </SheetDescription>
        </SheetHeader>
        <EditTask key={task?.id} task={task} onSuccess={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  )
}

export { ButtonEditTask }

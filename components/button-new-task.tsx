import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Plus } from "lucide-react"
import { NewTask } from "./new-task"

const ButtonNewTask = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="gap-2 bg-chart-2">
          <Plus className="h-4 w-4" />
          Nova Tarefa
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90%]">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Nova Tarefa</SheetTitle>
          <SheetDescription>
            Adicione uma nova tarefa ao seu planejamento.
          </SheetDescription>
        </SheetHeader>
        <NewTask />
        <SheetFooter>
          <Button type="submit">Criar Tarefa</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancelar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export { ButtonNewTask }

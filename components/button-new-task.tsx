import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Plus } from "lucide-react"

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
          <SheetTitle className="text-2xl font-bold">Detalhes</SheetTitle>
          <SheetDescription>
            Visualize o resumo das tarefas de acordo com o periodo selecionado.
          </SheetDescription>
        </SheetHeader>
        <></>
      </SheetContent>
    </Sheet>
  )
}

export { ButtonNewTask }

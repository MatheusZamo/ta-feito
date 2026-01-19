import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import { SearchByPeriod } from "@/components/search-by-period"

const ButtonDetails = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90%]">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Detalhes</SheetTitle>
          <SheetDescription>
            Visualize o resumo das tarefas de acordo com o periodo selecionado.
          </SheetDescription>
        </SheetHeader>
        <SearchByPeriod />
      </SheetContent>
    </Sheet>
  )
}

export { ButtonDetails }

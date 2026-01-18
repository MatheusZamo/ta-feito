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
import { QuickStats } from "@/components/quick-stats"
import { SearchByPeriod } from "@/components/search-by-period"

const MenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90%]">
        <SheetHeader>
          <SheetTitle>Detalhes</SheetTitle>
          <SheetDescription>
            Visualize o resumo das tarefas de acordo com o periodo selecionado.
          </SheetDescription>
        </SheetHeader>
        <SearchByPeriod />
        <QuickStats />
      </SheetContent>
    </Sheet>
  )
}

export { MenuSheet }

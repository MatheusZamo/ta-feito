import {
  Calendar,
  CalendarClock,
  CalendarDays,
  CalendarRange,
} from "lucide-react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"

//componente task-filter e o componente base
const SearchByPeriod = () => {
  const periods = [
    { id: "daily", label: "Diário", icon: Calendar },
    { id: "weekly", label: "Semanal", icon: CalendarDays },
    { id: "monthly", label: "Mensal", icon: CalendarRange },
    { id: "yearly", label: "Anual", icon: CalendarClock },
  ]
  return (
    <Card className="p-4 mt-3">
      <h3 className="mb-4 text-md font-semibold">Periodo</h3>
      <ul className="space-y-2">
        {periods.map(period => (
          <li key={period.id}>
            <Button
              className="w-full justify-start gap-2 hover:bg-chart-2 hover:text-white"
              variant="outline"
            >
              <period.icon className="h-4 w-4" />
              {period.label}
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export { SearchByPeriod }

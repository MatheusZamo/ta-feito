import {
  Calendar,
  CalendarClock,
  CalendarDays,
  CalendarRange,
  Circle,
  CircleCheckBig,
  Clock,
} from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Separator } from "./ui/separator"

const SearchByPeriod = () => {
  const periods = [
    { id: "daily", label: "Diário", icon: Calendar },
    { id: "weekly", label: "Semanal", icon: CalendarDays },
    { id: "monthly", label: "Mensal", icon: CalendarRange },
    { id: "yearly", label: "Anual", icon: CalendarClock },
  ]

  const stats = [
    {
      label: "Concluidas",
      value: 24,
      icon: CircleCheckBig,
      color: "text-green-600",
    },
    {
      label: "Pendentes",
      value: 12,
      icon: Circle,
      color: "text-primary",
    },
    {
      label: "Atrasadas",
      value: 3,
      icon: Clock,
      color: "text-destructive",
    },
  ]
  return (
    <Card className="p-4 ml-5 w-80">
      <h3 className=" text-md font-semibold">Periodo</h3>
      <ul className="space-y-2">
        {periods.map(period => (
          <li key={period.id}>
            <Button
              className="w-full h-7 justify-start gap-2 hover:bg-chart-2 hover:text-white"
              variant="outline"
            >
              <period.icon className="h-4 w-4" />
              {period.label}
            </Button>
          </li>
        ))}
      </ul>
      <h3 className="mb-4  text-md font-semibold">Resumo Diário</h3>
      <ul className="space-y-3 px-3">
        {stats.map(stat => (
          <li key={stat.label}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>

              <span className="text-lg font-semibold">{stat.value}</span>
            </div>
            <Separator />
          </li>
        ))}
      </ul>
    </Card>
  )
}

export { SearchByPeriod }

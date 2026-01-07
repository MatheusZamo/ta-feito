import { Circle, CircleCheckBig, Clock } from "lucide-react"
import { Card } from "./ui/card"

const QuickStats = () => {
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
    <Card className="mt-3 p-4">
      <h3 className="mb-4 text-md font-semibold">Resumo</h3>
      <ul className="space-y-3 px-3">
        {stats.map(stat => (
          <li key={stat.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
            <span className="text-lg font-semibold">{stat.value}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export { QuickStats }

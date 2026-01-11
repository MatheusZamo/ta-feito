import { Calendar, Flag, MoreVertical } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"

const TaskList = () => {
  const tasks = [
    {
      id: 1,
      title: "Revisar apresentação do projeto",
      description: "Verificar slides e preparar demonstração",
      date: "Hoje, 14:00",
      priority: "high",
      completed: false,
      category: "Trabalho",
    },
    {
      id: 2,
      title: "Fazer exercícios de matemática",
      description: "Capítulo 5 - Equações diferenciais",
      date: "Hoje, 16:30",
      priority: "medium",
      completed: false,
      category: "Estudos",
    },
    {
      id: 3,
      title: "Comprar ingredientes para jantar",
      description: "Lista: tomate, alface, frango, arroz",
      date: "Hoje, 18:00",
      priority: "low",
      completed: false,
      category: "Pessoal",
    },
    {
      id: 4,
      title: "Reunião com equipe de design",
      description: "Discutir novo layout da interface",
      date: "Ontem, 10:00",
      priority: "medium",
      completed: true,
      category: "Trabalho",
    },
  ]

  const priorityColors = {
    high: "text-destructive",
    medium: "text-primary",
    low: "text-muted-foreground",
  } as const
  return (
    <>
      <div className="space-y-4 mt-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Tarefas</h2>
          <Button variant="outline" size="sm">
            Ver todas
          </Button>
        </div>

        <div className="space-y-3">
          {tasks.map(task => (
            <Card
              key={task.id}
              className={`p-4 transition-all hover:shadow-md cursor-pointer ${task.completed ? "opacity-60" : ""}`}
            >
              <div className="flex items-start gap-4">
                <Checkbox checked={task.completed} className="mt-1" />
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className={`font-semibold leading-relaxed ${task.completed ? "line-through" : ""}`}
                      >
                        {task.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {task.description}
                      </p>
                    </div>

                    <Button variant="ghost" size="icon" className="shrink-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{task.date}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Flag
                        className={`h-3.5 w-3.5 ${priorityColors[task.priority as keyof typeof priorityColors]}`}
                      />
                      <span className="text-muted-foreground">
                        {task.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export { TaskList }

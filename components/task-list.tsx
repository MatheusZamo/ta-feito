import { Tasks } from "./tasks"
import { Button } from "./ui/button"

const TaskList = () => {
  const tasks = [
    {
      id: 1,
      title: "Revisar apresentação do projeto",
      description: "Verificar slides e preparar demonstração",
      date: "Hoje, 14:00",
      priority: "high" as const,
      completed: false,
      category: "Trabalho",
      time: "14:30",
      period: "daily" as const,
    },
    {
      id: 2,
      title: "Fazer exercícios de matemática",
      description: "Capítulo 5 - Equações diferenciais",
      date: "Hoje, 16:30",
      priority: "medium" as const,
      completed: false,
      category: "Estudos",
      time: "14:30",
      period: "daily" as const,
    },
    {
      id: 3,
      title: "Comprar ingredientes para jantar",
      description: "Lista: tomate, alface, frango, arroz",
      date: "Hoje, 18:00",
      priority: "low" as const,
      completed: false,
      category: "Pessoal",
      time: "14:30",
      period: "daily" as const,
    },
    {
      id: 4,
      title: "Reunião com equipe de design",
      description: "Discutir novo layout da interface",
      date: "Ontem, 10:00",
      priority: "medium" as const,
      completed: true,
      category: "Trabalho",
      time: "14:30",
      period: "daily" as const,
    },
  ]

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
          <Tasks tasks={tasks} />
        </div>
      </div>
    </>
  )
}

export { TaskList }

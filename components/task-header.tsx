import { Bell, Plus, Search, Settings } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const TaskHeader = () => {
  return (
    <header className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-balance">
            Minhas Tarefas
          </h1>
          <p className="mt-2 text-muted-foreground">
            Organize suas tarefas diárias, semanais, mensais e anuais
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-chart-2" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button className="gap-2 bg-chart-2">
            <Plus className="h-4 w-4" />
            Nova Tarefa
          </Button>
        </div>
      </div>
      <div className="relative">
        <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Buscar tarefas..." className="p-5 h-12 bg-card" />
      </div>
    </header>
  )
}

export { TaskHeader }

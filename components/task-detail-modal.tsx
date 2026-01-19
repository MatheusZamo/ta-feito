import {
  Badge,
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  Flag,
  Pencil,
  Tag,
  Trash2,
} from "lucide-react"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Separator } from "./ui/separator"

interface Task {
  id: number
  title: string
  description: string
  date: string
  priority: "high" | "medium" | "low"
  completed: boolean
  category: string
  time?: string
  period?: "daily" | "weekly" | "monthly"
}

interface TaskDetailModalProps {
  task: Task | null
}

const TaskDetailModal = ({ task }: TaskDetailModalProps) => {
  if (!task) return null

  const priorityConfig = {
    high: {
      label: "Alta",
      color: "bg-destructive text-destructive-foreground",
    },
    medium: { label: "Média", color: "bg-primary text-primary-foreground" },
    low: { label: "Baixa", color: "bg-muted text-muted-foreground" },
  }

  const periodConfig = {
    daily: "Diária",
    weekly: "Semanal",
    monthly: "Mensal",
    yearly: "Anual",
  }

  return (
    <Dialog>
      <DialogContent className="sm:max-w-150">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-balance">
            {task.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Button
              variant={task.completed ? "default" : "outline"}
              size="sm"
              className="gap-2"
            >
              {task.completed ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Concluída
                </>
              ) : (
                <>
                  <Circle className="h-4 w-4" />
                  Marcar como concluida
                </>
              )}
            </Button>

            <div className="ml-auto flex gap-2">
              <Button variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground">
              Descrição
            </h3>
            <p className="leading-relaxed text-foreground">
              {task.description}
            </p>
          </div>

          <Separator />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="font-medium">Data</span>
              </div>
              <p className="text-sm font-semibold">{task.date}</p>
            </div>

            {task.time && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">Horário</span>
                </div>
                <p className="text-sm font-semibold">{task.time}</p>
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Flag className="h-4 w-4" />
                <span className="font-medium">Prioridade</span>
              </div>
              <Badge className={priorityConfig[task.priority].color}>
                {priorityConfig[task.priority].label}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Tag className="h-4 w-4" />
                <span className="font-medium">Categoria</span>
              </div>
              <Badge>{task.category}</Badge>
            </div>

            {task.period && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">Periodo</span>
                </div>
                <Badge>{periodConfig[task.period]}</Badge>
              </div>
            )}
          </div>

          {task.completed && (
            <>
              <Separator />
              <div className="rounded-lg bg-accent/20 p-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span className="font-medium text-accent">
                    Tarefa concluídada com sucesso
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { TaskDetailModal }

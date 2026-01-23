import { Task } from "@/interfaces/task"
import { Calendar, Flag, MoreVertical } from "lucide-react"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Button } from "./ui/button"

interface TaskProps {
  tasks: Task[]
}

const Tasks = ({ tasks }: TaskProps) => {
  const priorityColors = {
    high: "text-destructive",
    medium: "text-primary",
    low: "text-muted-foreground",
  } as const
  return (
    <>
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
                  <span className="text-muted-foreground">{task.category}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </>
  )
}

export { Tasks }

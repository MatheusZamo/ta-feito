import { getTasks } from "@/actions/get-tasks"
import { Tasks } from "./tasks"
import { Button } from "./ui/button"

const TaskList = async () => {
  const tasksInDb = await getTasks()

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
          <Tasks tasks={tasksInDb.tasks} />
        </div>
      </div>
    </>
  )
}

export { TaskList }

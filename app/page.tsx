import { TaskHeader } from "@/components/task-header"
import { TaskList } from "@/components/task-list"

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <TaskHeader />
      <TaskList />
    </div>
  )
}

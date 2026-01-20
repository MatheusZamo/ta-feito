export interface Task {
  id: number
  title: string
  description: string
  date: string
  priority: "high" | "medium" | "low"
  completed: boolean
  category: string
  time: string
  period: "daily" | "weekly" | "monthly" | "yearly"
}

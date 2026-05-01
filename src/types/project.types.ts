export type ProjectStatus = 'Livré' | 'En cours' | 'Refonte' | 'Prototype'

export type Project = {
  id: string
  title: string
  category: string
  description: string
  stack: readonly string[]
  status: ProjectStatus
  githubUrl?: string
  demoUrl?: string
}

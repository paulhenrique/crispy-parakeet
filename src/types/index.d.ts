export interface Message {
  id: number
  userId: number
  description: string
  createdAt: string
  updatedAt: string
  user: User
}

export interface User {
  name: string
  picture: string
}

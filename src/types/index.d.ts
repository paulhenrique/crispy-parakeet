export interface Message {
  id: number
  userId: number
  description: string
  createdAt: string
  updatedAt: string
  user: User
}

export interface User {
  id: number
  name: string
  password: string
  picture: string
  createdAt: string
  updatedAt: string
}

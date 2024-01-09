import { User } from 'entities/User'

export interface CommentDto {
  id: string
  text: string
  user: User
}

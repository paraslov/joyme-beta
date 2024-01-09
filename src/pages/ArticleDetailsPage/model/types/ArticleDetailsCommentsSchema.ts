import { EntityState } from '@reduxjs/toolkit'
import { CommentDto } from 'entities/Comment'

export interface ArticleDetailsCommentsSchema extends EntityState<CommentDto> {
  isLoading?: boolean
  errorMessage?: string
}

import { Article } from './Article'

export interface ArticleSchema {
  isLoading: boolean
  article?: Article
  errorMessage?: string
}

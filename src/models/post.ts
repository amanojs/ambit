export interface Post {
  post_id: string
  account_id: string
  post_body: string
  post_type: number
  created_at: Date
  genres: string[]
  images: string[]
}

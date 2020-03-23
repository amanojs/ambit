import { User } from './user'

/** 投稿するときに必要なデータ */
export interface Post {
  // post_id: string
  account_id: User['account_id']
  post_body: string
  post_type: number
  // created_at: Date
  genres: string[]
  images: string[]
}

/**  */
export interface ReceivedPost extends Post, User {
  post_id: string
  reactions: Reaction[]
  replies_amount: number
  replies: ReceivedPost[]
  created_at: Date
}

export interface Reaction {
  reaction_id: string
  reaction_name: string
  account_id: string
}

export const PostMock: Post = {
  account_id: '12345678',
  post_body: 'おらおらおらおらお',
  post_type: 3,
  // created_at: Date
  genres: [],
  images: []
}

export const UserMock: User = {
  user_id: 'test_san',
  user_name: 'テスト太郎',
  account_id: '12345678'
}

export const ReceivedPostMock: ReceivedPost = {
  ...PostMock,
  ...UserMock,
  post_id: '000055553333',
  reactions: [],
  replies_amount: 0,
  replies: [],
  created_at: new Date('2999-03-12 23:32:33')
}

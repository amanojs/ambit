import { Post } from '../../models/post'
import { actionCreatorFactory } from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

export interface State {
  posts: Post[]
}

export const initialstate: State = {
  posts: []
}

const ac = actionCreatorFactory()

export const Actions = {
  addPost: ac<Post>('ADD')
}

export const Reducer = reducerWithInitialState(initialstate).case(
  Actions.addPost,
  (state: State, post: Post) => {
    return {
      ...state,
      posts: [...state.posts, post]
    }
  }
)

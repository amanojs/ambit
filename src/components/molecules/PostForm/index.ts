import * as Store from '../../../store/index'
import { Post } from '../../../models/post'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { connect } from 'react-redux'
import { PostForm } from './PostForm'

export interface PostHandler {
  addPost(post: Post): void
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<Store.AppState, undefined, Action>
): PostHandler => {
  return {
    addPost: (post: Post) => {
      dispatch(Store.AppAction.post.addPost(post))
    }
  }
}

export default connect(null, mapDispatchToProps)(PostForm)

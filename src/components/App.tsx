import * as React from 'react'
import { PopUp } from './organisms/PopUp'
import PostForm from './molecules/PostForm'
import { PostList } from './organisms/PostList'
import { ReceivedPost, ReceivedPostMock } from '../models/post'

export interface AppProps {
  compiler: string
  framework: string
}

const itemList: ReceivedPost[] = [
  ReceivedPostMock,
  ReceivedPostMock,
  ReceivedPostMock,
  ReceivedPostMock
]

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <React.Fragment>
        <h1>
          Hello {this.props.compiler} and {this.props.framework}!
        </h1>
        <PostList itemList={itemList} />
        <PopUp>
          <div>
            <PostForm />
          </div>
        </PopUp>
        <style jsx>{`
          .postList {
            width: 800px;
            margin: 0 auto;
            height: 100vh;
          }
        `}</style>
      </React.Fragment>
    )
  }
}

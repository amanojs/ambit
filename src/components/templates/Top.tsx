import * as React from 'react'
import { PostList } from '../organisms/PostList'
import { ReceivedPost, ReceivedPostMock } from '../../models/post'
import { PostPop } from '../organisms/PostPop'
import { Button } from '../atoms/Button'

export interface Props {
  compiler: string
  framework: string
}

const itemList: ReceivedPost[] = [
  ReceivedPostMock,
  ReceivedPostMock,
  ReceivedPostMock,
  ReceivedPostMock
]

export const Top: React.FC<Props> = props => {
  const [postpop_flg, setPostFlg] = React.useState(false)
  return (
    <React.Fragment>
      <h1>
        Hello {props.compiler} and {props.framework}!
      </h1>
      <button onClick={() => setPostFlg(true)}>投稿する</button>
      <PostList itemList={itemList} />
      <PostPop setFlg={setPostFlg} open_flg={postpop_flg} />
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

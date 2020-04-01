import * as React from 'react'
import PostList from '../organisms/PostList/index'
import { ReceivedPost, ReceivedPostMock } from '../../models/post'
import { PostPop } from '../organisms/PostPop'
import { Button } from '../atoms/Button'

export interface Props {}

const itemList: ReceivedPost[] = [
  ReceivedPostMock,
  ReceivedPostMock,
  ReceivedPostMock,
  ReceivedPostMock
]

export const Top: React.FC<Props> = props => {
  //PostPopのフラグ
  const [postpop_flg, setPostFlg] = React.useState(false)
  return (
    <React.Fragment>
      <button onClick={() => setPostFlg(true)}>投稿する</button>
      <PostList />
      <PostPop setFlg={setPostFlg} open_flg={postpop_flg} />
      <style jsx={true}>{`
        .postList {
          width: 800px;
          margin: 0 auto;
          height: 100vh;
        }
      `}</style>
    </React.Fragment>
  )
}

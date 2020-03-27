import * as React from 'react'
import { PostList } from '../organisms/PostList'
import { ReceivedPost, ReceivedPostMock } from '../../models/post'
import { PostPop } from '../organisms/PostPop'
import { Button } from '../atoms/Button'
import { DebugPop } from '../organisms/DebugPop'

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
  //PostPopのフラグ
  const [postpop_flg, setPostFlg] = React.useState(false)
  const [debug_flg, setDebugFlg] = React.useState(false)
  return (
    <React.Fragment>
      <h1>
        Hello {props.compiler} and {props.framework}!
      </h1>
      <button onClick={() => setPostFlg(true)}>投稿する</button>
      <PostList itemList={itemList} />
      {/* カーボンの色が濃くなるからやっぱ同一コンポーネント内でのクラスが上書きされてでちゃってる */}
      <DebugPop setFlg={setDebugFlg} open_flg={debug_flg} />
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

import * as React from 'react'
import { PopUp } from '../molecules/PopUp'
import PostForm from '../molecules/PostForm/'

interface Props {
  setFlg: any
  open_flg: boolean
}

export const PostPop: React.FC<Props> = props => {
  const handleSetFlg = () => {
    props.setFlg(false)
  }
  return (
    <PopUp click_event={handleSetFlg} open_flg={props.open_flg}>
      <PostForm doneEvent={handleSetFlg} />
    </PopUp>
  )
}

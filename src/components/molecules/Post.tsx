import * as React from 'react'

import { ReceivedPost } from '../../models/post'
import { Text } from '../atoms/Text'

interface Props {
  item: ReceivedPost
}

export const Post: React.FC<Props> = props => {
  return (
    <React.Fragment>
      {/* 分ける必要あるかも */}
      <div className="post" onClick={() => () => false}>
        <div className="post_header">
          <Text body={props.item.user_id} color="blue" fontSize="12px" />
          <Text body={props.item.user_name} color="gray" fontSize="12px" />
        </div>
        <div className="post_body">{props.item.post_body}</div>
        <div className="post_footer">
          <Text body={props.item.created_at.toString() + 'に投稿'}></Text>
        </div>
      </div>
      <style jsx>{`
        .post {
          padding: 10px 20px;
        }
      `}</style>
    </React.Fragment>
  )
}

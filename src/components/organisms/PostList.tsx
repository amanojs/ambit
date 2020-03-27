import * as React from 'react'
import { Post } from '../molecules/Post'
import { ReceivedPost } from '../../models/post'

interface OwnProps {
  itemList: ReceivedPost[]
}

type Props = OwnProps

export const PostList: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <div className="postList">
        {props.itemList.map((item: ReceivedPost) => (
          <Post item={item} key={item.post_id} />
        ))}
      </div>
      <style jsx={true}>{`
        .postList {
          border-right: 1px solid #ddd;
          border-left: 1px solid #ddd;
        }
      `}</style>
    </React.Fragment>
  )
}

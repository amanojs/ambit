import * as React from 'react'
import { Button } from '../../atoms/Button'
import { PostHandler } from '.'
import { TextArea } from '../../atoms/TextArea'
import { IconButton } from '../../atoms/IconButton'
import { Post } from '../../../models/post'

interface OwnProps {
  width?: string
  doneEvent?(): void
}

type Props = OwnProps & PostHandler

export const PostForm: React.FC<Props> = props => {
  const TextAreaRef = React.useRef({} as HTMLTextAreaElement)
  const testFunction = () => {
    console.log('inputの値は' + TextAreaRef.current.value)
    TextAreaRef.current.value = ''
  }
  const addPostHandler = () => {
    const post: Post = {
      account_id: '33333333',
      post_body: TextAreaRef.current.value,
      post_type: 1,
      genres: ['IT'],
      images: []
    }
    props.addPost(post)
    TextAreaRef.current.value = ''
    if (props.doneEvent) props.doneEvent()
  }
  return (
    <React.Fragment>
      <form action="" className="PostForm">
        <div className="PostFormTab">
          <IconButton icon="image-plus" bgcolor="#eee" />
        </div>
        <TextArea ref={TextAreaRef} min_height="100px" />
        {/* <Button click_event={props.addPost} /> */}
        <Button
          click_event={addPostHandler}
          width="100%"
          height="50px"
          bgcolor="#9b59b6"
          color="#fff"
        />
      </form>
      <style jsx={true}>{`
        .PostForm {
        }
      `}</style>
    </React.Fragment>
  )
}

PostForm.defaultProps = {
  width: '700px'
}

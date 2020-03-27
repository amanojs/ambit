import * as React from 'react'
import { Button } from '../../atoms/Button'
import { PostHandler } from '.'
import { TextArea } from '../../atoms/TextArea'
import { IconButton } from '../../atoms/IconButton'

interface OwnProps {
  width?: string
}

type Props = OwnProps & PostHandler

export const PostForm: React.FC<Props> = props => {
  const TextAreaRef = React.useRef({} as HTMLTextAreaElement)
  const testFunction = () => {
    console.log('inputの値は' + TextAreaRef.current.value)
    TextAreaRef.current.value = ''
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
          click_event={testFunction}
          width="100%"
          height="50px"
          bgcolor="#9b59b6"
          color="#fff"
        />
        <Button
          click_event={testFunction}
          width="100%"
          height="20px"
          bgcolor="#555"
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

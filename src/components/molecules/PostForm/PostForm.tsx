import * as React from 'react'
import { Button } from '../../atoms/Button'
import { InputText } from '../../atoms/InputText'
import { PostHandler } from '.'

interface OwnProps {}

type Props = OwnProps & PostHandler

export const PostForm: React.FC<Props> = props => {
  const testFunction = () => {
    console.log('これpython?')
  }
  return (
    <React.Fragment>
      <form action="">
        <InputText />
        <Button click_event={props.addPost} />
      </form>
    </React.Fragment>
  )
}

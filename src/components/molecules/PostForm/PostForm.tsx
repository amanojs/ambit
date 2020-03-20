import * as React from 'react'
import { Button } from '../../atoms/Button'
import { InputText } from '../../atoms/InputText'
import { PostHandler } from '.'

interface OwnProps {}

type Props = OwnProps & PostHandler

export const PostForm: React.FC<Props> = props => {
  //親側でRefを作る
  const inputRef = React.useRef({} as HTMLInputElement)
  const testFunction = () => {
    console.log('inputの値は' + inputRef.current.value)
    inputRef.current.value = ''
  }
  return (
    <React.Fragment>
      <form action="">
        <InputText ref={inputRef} />
        {/* <Button click_event={props.addPost} /> */}
        <Button click_event={testFunction} />
      </form>
    </React.Fragment>
  )
}

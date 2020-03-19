import * as React from 'react'
import { TestHandler } from '../containers/TestContainer'

interface OwnProps {
  storeValue: string
}

type Props = OwnProps & TestHandler
export const StoreSample: React.FC<Props> = props => {
  const inputRef = React.useRef({} as HTMLInputElement)

  const changeValue = () => {
    // Refを生成し取得する方法
    const value: string = inputRef.current.value
    // UseStateを生成し取得する方法
    // const value: string = text
    props.changeValue(value)
  }

  const resetValue = () => {
    props.resetValue()
  }

  type InputType = {
    text: string
  }

  const [text, setText] = React.useState('')

  const setTextHandler = (v: React.ChangeEvent<HTMLInputElement>) => {
    setText(v.target.value)
  }

  return (
    <React.Fragment>
      <div className="storeSample">
        <h2>Storeのサンプルコンポーネントです。</h2>
        <p>Storeの値は「{props.storeValue}」です。</p>
        <p>Inputの値は{text == '' ? '未入力' : '「' + text + '」'}です。</p>
        <div className="inputArea">
          <input
            ref={inputRef}
            onChange={event => setTextHandler(event)}
            type="text"
          />
          <button onClick={changeValue}>Change</button>
          <button onClick={resetValue}>Reset</button>
        </div>
      </div>

      <style jsx>{`
        .storeSample {
          padding: 20px;
          background-color: white;
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
        }

        .inputArea {
          padding: 20px 0;
        }
      `}</style>
    </React.Fragment>
  )
}

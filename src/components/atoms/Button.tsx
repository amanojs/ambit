import * as React from 'react'

interface Props {
  click_event(): void
  name?: string
  bgcolor?: string
  color?: string
}

export const Button: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <input
        type="button"
        className="button"
        //()がないと動きません。
        onClick={() => props.click_event()}
        value={props.name}
      />

      <style jsx scoped>{`
        .button {
          cursor: pointer;
          width: 100px;
          height: 30px;
          background-color: ${props.bgcolor};
          color: ${props.color};
        }
      `}</style>
    </React.Fragment>
  )
}

Button.defaultProps = {
  name: '送信',
  bgcolor: '#eee',
  color: '#222'
}

import * as React from 'react'

interface Props {
  click_event(): void
  width?: string
  height?: string
  round?: boolean
  name?: string
  bgcolor?: string
  color?: string
  type?: 'button' | 'submit'
}

export const Button: React.FC<Props> = props => {
  console.log(props.bgcolor)
  return (
    <React.Fragment>
      <input
        type={props.type}
        className="button"
        //()がないと動きません。
        onClick={() => props.click_event()}
        value={props.name}
      />

      <style jsx={true}>{`
        .button {
          cursor: pointer;
          width: ${props.width};
          height: ${props.height};
          background-color: ${props.bgcolor};
          color: ${props.color};
          letter-spacing: 2.5px;
          border: 0;
          border-radius: ${props.round ? '5px' : '0'};
          outline: 0;
        }
      `}</style>
    </React.Fragment>
  )
}

Button.defaultProps = {
  width: '100px',
  height: '30px',
  name: '送信',
  bgcolor: '#eee',
  color: '#222',
  type: 'button',
  round: true
}

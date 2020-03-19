import * as React from 'react'

interface Props {
  click_event: Function
  name?: string
  color?: string
}

export const Button: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <input
        type="button"
        className="button"
        onClick={() => props.click_event}
        value={props.name}
      />

      <style jsx scoped>{`
        .button {
          width: 200px;
          height: 60px;
          background-color: ${props.color};
        }
      `}</style>
    </React.Fragment>
  )
}

Button.defaultProps = {
  color: '#555',
  name: '送信'
}

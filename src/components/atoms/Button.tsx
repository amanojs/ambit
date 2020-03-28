import * as React from 'react'
import { Transition } from 'react-transition-group'
import { TransitionStatus } from 'react-transition-group/Transition'

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
  const [hover_flg, setFlg] = React.useState(false)
  return (
    <React.Fragment>
      <Transition in={hover_flg} timeout={100}>
        {(state: TransitionStatus) => (
          <input
            type={props.type}
            className="button"
            //()がないと動きません。
            onClick={() => props.click_event()}
            onMouseOver={() => setFlg(true)}
            onMouseOut={() => setFlg(false)}
            value={props.name}
            style={{
              cursor: 'pointer',
              transition: '0.5s',
              width: props.width,
              height: props.height,
              color: props.color,
              letterSpacing: '2.5px',
              border: 0,
              outline: 0,
              borderRadius: props.round ? '5px' : '0',
              backgroundColor: state === 'entered' ? 'black' : props.bgcolor
            }}
          />
        )}
      </Transition>

      <style jsx={true}>{`
        .oioi {
          color: #999;
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

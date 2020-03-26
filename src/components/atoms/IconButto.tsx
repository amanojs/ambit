import * as React from 'react'
import Icon from '@material-ui/core/Icon'
import { Transition } from 'react-transition-group'
import { TransitionStatus } from 'react-transition-group/Transition'

interface Props {
  icon: string
  width?: string
  height?: string
  click_event?(): void
  bgcolor?: string
  color?: string
}

export const IconButton: React.FC<Props> = props => {
  const [hover_flg, setFlg] = React.useState(false)
  return (
    <React.Fragment>
      <div
        className="IconButton"
        onMouseOver={() => setFlg(true)}
        onMouseOut={() => setFlg(false)}
        onClick={() => props.click_event()}
      >
        <Icon>{props.icon}</Icon>
      </div>
      <Transition in={hover_flg} timeout={100}>
        {(state: TransitionStatus) => (
          <style jsx>{`
            .IconButton {
              transition: 0.3s;
              display: flex;
              justify-content: center;
              align-items: center;
              width: ${props.width};
              height: ${props.height};
              color: ${props.color};
              padding: 5px;
              border-radius: 100px;
              cursor: pointer;
              background-color: ${hover_flg ? props.bgcolor : ''};
            }
          `}</style>
        )}
      </Transition>
    </React.Fragment>
  )
}

IconButton.defaultProps = {
  width: '20px',
  height: '20px',
  bgcolor: '#DFF0D8',
  color: '#777777'
}

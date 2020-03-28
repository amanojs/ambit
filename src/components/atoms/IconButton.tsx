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
  return (
    <React.Fragment>
      <div
        className="IconButton"
        onClick={() => props.click_event()}
        style={{
          transition: '0.3s',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: props.width,
          height: props.height,
          color: props.color,
          padding: '5px',
          borderRadius: '100px',
          cursor: 'pointer'
        }}
      >
        <Icon>{props.icon}</Icon>
      </div>
      <style jsx={true}>{`
        .IconButton:hover {
          background-color: ${props.bgcolor};
        }
      `}</style>
    </React.Fragment>
  )
}

IconButton.defaultProps = {
  width: '20px',
  height: '20px',
  bgcolor: '#DFF0D8',
  color: '#777777'
}

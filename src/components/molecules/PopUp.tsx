import * as React from 'react'
import { Carvon } from '../atoms/Carvon'
import { TransitionStatus } from 'react-transition-group/Transition'
import { Transition } from 'react-transition-group'
import { IconButton } from '../atoms/IconButton'

interface Props {
  width?: string
  height?: string
  children: React.ReactNode
  click_event(): void
  open_flg: boolean
}

export const PopUp: React.FC<Props> = props => {
  return (
    <Transition in={props.open_flg} timeout={200}>
      {(state: TransitionStatus) => (
        <React.Fragment>
          <div
            className="PopUp"
            style={{
              transition: '0.2s',
              opacity: state === 'entered' ? 1 : 0,
              display: state === 'exited' ? 'none' : 'block'
            }}
          >
            <div
              className="PopCard"
              style={{
                transition: '0.5s',
                position: 'fixed',
                top: state === 'entered' ? '30%' : '0',
                left: '50%',
                transform: 'translateY(-50%) translateX(-50%)',
                WebkitTransform: 'translateY(-50%) translateX(-50%)',
                margin: 'auto',
                width: props.width,
                height: props.height,
                padding: '10px',
                borderRadius: '4px',
                backgroundColor: '#fff',
                zIndex: 6
              }}
            >
              <div
                className="PopTab"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: props.width,
                  height: '40px'
                }}
              >
                <IconButton
                  click_event={props.click_event}
                  icon="close-thick"
                  bgcolor="#F2DEDE"
                  color="#A94442"
                />
              </div>
              {props.children}
            </div>
            <Carvon clickEvent={props.click_event} />
          </div>
        </React.Fragment>
      )}
    </Transition>
  )
}

PopUp.defaultProps = {
  width: '500px',
  height: 'auto'
}

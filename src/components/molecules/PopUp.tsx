import * as React from 'react'
import { Carvon } from '../atoms/Carvon'
import { TransitionStatus } from 'react-transition-group/Transition'
import { Transition } from 'react-transition-group'
import { IconButton } from '../atoms/IconButto'

interface Props {
  width?: string
  height?: string
  children: React.ReactNode
  click_event(): void
  open_flg: boolean
}

export const PopUp: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <div className="PopUp">
        <div className="PopCard">
          <div className="PopTab">
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

      <Transition in={props.open_flg} timeout={200}>
        {(state: TransitionStatus) => (
          <style jsx>{`
            .PopUp {
              transition: 0.2s;
              opacity: ${state === 'entered' ? 1 : 0};
              display: ${state === 'exited' ? 'none' : 'block'};
            }
            .PopCard {
              transition: 0.5s;
              position: fixed;
              top: ${state === 'entered' ? 30 : 0}%;
              left: 50%;
              transform: translateY(-50%) translateX(-50%);
              -webkit-transform: translateY(-50%) translateX(-50%);
              margin: auto;
              width: ${props.width};
              height: ${props.height};
              padding: 10px;
              border-radius: 4px;
              overflow: hidden;
              background-color: #fff;
              z-index: 6;
            }
            .PopTab {
              display: flex;
              align-items: center;
              width: ${props.width};
              height: 40px;
            }
          `}</style>
        )}
      </Transition>
    </React.Fragment>
  )
}

PopUp.defaultProps = {
  width: '500px',
  height: '300px'
}

import * as React from 'react'
import { Carvon } from '../atoms/Carvon'
import { Transition } from 'react-transition-group'

interface Props {
  children: React.ReactNode
  click_event(): void
  open_flg: boolean
}

export const PopUp: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <div className="PopUpSum">
        <div className="PopUp" onClick={() => props.click_event()}>
          {props.children}
        </div>
        <Carvon />
      </div>

      <Transition in={props.open_flg} timeout={200}>
        {state => (
          <style jsx>{`
            .PopUpSum {
              transition: 0.2s;
              opacity: ${state === 'entered' ? 1 : 0};
              display: ${state === 'exited' ? 'none' : 'block'};
            }
            .PopUp {
              display: flex;
              justify-content: center;
              position: fixed;
              top: 0;
              width: 100vw;
              height: 100vh;
              padding-top: 30px;
              z-index: 5;
            }
          `}</style>
        )}
      </Transition>
    </React.Fragment>
  )
}

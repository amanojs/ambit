import * as React from 'react'
import { Carvon } from '../atoms/Carvon'

interface Props {
  children: React.ReactNode
  click_event(): void
  open_flg: boolean
}

export const PopUp: React.FC<Props> = props => {
  const display_flg = props.open_flg ? 'box' : 'none'
  return (
    <React.Fragment>
      <div className="PopUpSum">
        <div className="PopUp" onClick={() => props.click_event()}>
          {props.children}
        </div>
        <Carvon />
      </div>
      <style jsx>{`
        .PopUpSum {
          display: ${display_flg};
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
    </React.Fragment>
  )
}

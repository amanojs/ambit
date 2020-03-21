import * as React from 'react'
import { Carvon } from '../atoms/Carvon'

interface Props {
  children: any
  click_event?(): void
}

export const PopUp: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <div className="PopUp">{props.children}</div>
      <Carvon click_event={props.click_event} />
      <style jsx>{`
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

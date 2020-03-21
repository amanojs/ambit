import * as React from 'react'

interface Props {
  children: any
}

export const PopUp: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <div className="PopUp">{props.children}</div>
      <style jsx>{`
        .PopUp {
          display: flex;
          justify-content: center;
          position: fixed;
          top: 0;
          width: 100vw;
          height: 100vh;
          padding-top: 30px;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 5;
        }
      `}</style>
    </React.Fragment>
  )
}

import * as React from 'react'

interface Props {
  click_event?(): void
}

export const Carvon: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <div className="Carvon" onClick={() => props.click_event()}></div>
      <style jsx>{`
        .Carvon {
          position: fixed;
          top: 0;
          width: 100vw;
          height: 100vh;
          background-color: #000;
          opacity: 0.6;
        }
      `}</style>
    </React.Fragment>
  )
}

import * as React from 'react'

interface Props {
  clickEvent?(): void
}

export const Carvon: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <div className="Carvon" onClick={() => props.clickEvent()}></div>
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

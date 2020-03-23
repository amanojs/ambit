import * as React from 'react'

interface Props {
  body: string
  fontSize?: string
  color?: string
}

export const Text: React.FC<Props> = props => {
  return (
    <React.Fragment>
      {/* なんちゃらインジェクション対策必要では？ */}
      <span className="text">{props.body}</span>

      <style jsx scoped>{`
        .text {
          color: ${props.color};
          font-size: ${props.fontSize};
        }
      `}</style>
    </React.Fragment>
  )
}

Text.defaultProps = {
  color: '#000',
  fontSize: '14px'
}

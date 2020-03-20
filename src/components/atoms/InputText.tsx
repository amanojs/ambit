import * as React from 'react'

interface Props {
  width?: string
  height?: string
  bgcolor?: string
  color?: string
}

export const InputText: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <input type="text" value="" className="input_text" />
      <style jsx>{`
        .input_text {
          width: ${props.width};
          height: ${props.height};
          background-color: ${props.bgcolor};
          color: ${props.color};
        }
      `}</style>
    </React.Fragment>
  )
}

InputText.defaultProps = {
  width: '300px',
  height: '40px',
  bgcolor: '#fff',
  color: '#444'
}

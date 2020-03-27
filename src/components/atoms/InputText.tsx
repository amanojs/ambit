import * as React from 'react'

interface Props {
  width?: string
  height?: string
  bgcolor?: string
  color?: string
}

//子供サイド
export const InputText = React.forwardRef(
  (props: Props, ref: React.MutableRefObject<HTMLInputElement>) => {
    // const MailInput = React.forwardRef((props, ref: React.MutableRefObject<HTMLInputElement>) => {
    // 本来は上のように定義するっぽいけど長すぎやん
    return (
      <React.Fragment>
        <input ref={ref} type="text" className="input_text" />
        <style jsx={true}>{`
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
)

// Refじゃない版
// export const InputText: React.FC<Props> = props => {
//   return (
//     <React.Fragment>
//       <input type="text" value="" className="input_text" />
//       <style jsx={true}>{`
//         .input_text {
//           width: ${props.width};
//           height: ${props.height};
//           background-color: ${props.bgcolor};
//           color: ${props.color};
//         }
//       `}</style>
//     </React.Fragment>
//   )
// }

InputText.defaultProps = {
  width: '300px',
  height: '40px',
  bgcolor: '#fff',
  color: '#444'
}

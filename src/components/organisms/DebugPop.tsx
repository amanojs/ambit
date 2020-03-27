import * as React from 'react'
import { PopUp } from '../molecules/PopUp'

interface Props {
  setFlg: React.Dispatch<React.SetStateAction<boolean>>
  open_flg: boolean
}

export const DebugPop: React.FC<Props> = props => {
  const handleSetFlg = () => {
    props.setFlg(false)
  }
  return (
    <React.Fragment>
      <PopUp click_event={handleSetFlg} open_flg={props.open_flg}>
        <div className="debug">おいおいおいおい</div>
      </PopUp>
      <style jsx={true}>{`
        .debug {
          font-size: 50px;
          color: white;
        }
      `}</style>
    </React.Fragment>
  )
}

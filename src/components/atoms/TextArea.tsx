import * as React from 'react'

interface Props {
  width?: string
  min_height?: string
  holder?: string
}

export const TextArea = React.forwardRef(
  (props: Props, ref: React.MutableRefObject<HTMLTextAreaElement>) => {
    //テキストエリアの高さ自動設定
    function textAreaHeightSet() {
      var argObj: any = document.getElementById('area')
      var wSclollHeight = parseInt(argObj.scrollHeight)
      var wLineH = parseInt(argObj.style.lineHeight.replace(/px/, ''))
      if (wSclollHeight < wLineH * 2) {
        wSclollHeight = wLineH * 2
      }
      argObj.style.height = wSclollHeight + 'px'
    }
    return (
      <React.Fragment>
        <textarea
          className="TextArea"
          id="area"
          placeholder="昨日の晩飯何だった？"
          ref={ref}
          onChange={() => textAreaHeightSet()}
        ></textarea>
        <style jsx={true}>{`
          .TextArea {
            width: 100%;
            min-height: ${props.min_height};
            background: #ffffff;
            border: 0px;
            font-size: 16px;
            color: #222;
            outline: 0;
            letter-spacing: 0.1em;
            line-height: 19px;
            resize: none;
          }
        `}</style>
      </React.Fragment>
    )
  }
)

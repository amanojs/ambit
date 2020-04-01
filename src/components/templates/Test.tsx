import * as React from 'react'

export interface Props {
  match: { path: string; url: string; isExact: boolean; params: { id: string } }
}

export const Test: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <div>Testコンポーネント</div>
      {props.match.params.id
        ? 'パラメータで渡された値:' + props.match.params.id
        : ''}
    </React.Fragment>
  )
}

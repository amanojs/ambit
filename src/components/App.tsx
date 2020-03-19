import * as React from 'react'
import { Button } from './atoms/Button'

export interface AppProps {
  compiler: string
  framework: string
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <h1>
        Hello {this.props.compiler} and {this.props.framework}!
        <Button click_event={() => {}} name="確認" />
      </h1>
    )
  }
}

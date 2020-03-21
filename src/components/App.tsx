import * as React from 'react'
import { PopUp } from './organisms/PopUp'
import PostForm from './molecules/PostForm'

export interface AppProps {
  compiler: string
  framework: string
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <React.Fragment>
        <h1>
          Hello {this.props.compiler} and {this.props.framework}!
        </h1>
        <PopUp>
          <PostForm />
        </PopUp>
      </React.Fragment>
    )
  }
}

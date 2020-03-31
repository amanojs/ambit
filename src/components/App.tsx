import * as React from 'react'
import { Top } from './templates/Top'
import { Header } from './organisms/Header'

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Top compiler="TypeScript" framework="React" />
      </React.Fragment>
    )
  }
}

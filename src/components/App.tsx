import * as React from 'react'
import { Top } from './templates/Top'

export class App extends React.Component<{}, {}> {
  render() {
    return <Top compiler="TypeScript" framework="React" />
  }
}

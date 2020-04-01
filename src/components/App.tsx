import * as React from 'react'
import { Top } from './templates/Top'
import { Test } from './templates/Test'
import { Header } from './organisms/Header'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          {/* BrowserRouterだと遷移先でリロードすると404になるのでHashRouterを使用 */}
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/posts/:id" component={Test} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import * as Store from '../../../store/'
import { PostList } from './PostList'

// storeの中の必要なデータだけ選んで渡す
/**  */
const mapStateToProps = (appState: Store.AppState) => {
  return {
    storeValue: appState.post.posts
  }
}

/** dispatchを関数内で実行する関数の一覧です。 */
export interface TestHandler {
  //changeValue(v: string): void
  //resetValue(): void
}

// storeの値を変更する関数の実際の処理。上で概念だけ設定したやつ
const mapDispatchToProps = (
  dispatch: ThunkDispatch<Store.AppState, undefined, Action>
): TestHandler => {
  return {
    changeValue: (value: string) => {
      dispatch(Store.AppAction.test.updateValue(value))
    },
    resetValue: () => {
      dispatch(Store.AppAction.test.resetValue())
    }
  }
}

// stateとactionsとcomponentを混ぜてる
export default connect(mapStateToProps, mapDispatchToProps)(PostList)

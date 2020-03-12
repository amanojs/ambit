import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// 作成したReducerを読み込みます。
import { TestReducer, TestState } from './reducers/test'

// Storeの構造を定義します。
export type AppState = {
  test: TestState
  // todo: TodoState のように複数宣言できます。
}

// Chromeの拡張機能REACT-DEVTOOLSを利用するための設定です。
const storeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers<AppState>({
    // ここで複数のReducerを列挙できますが、今回は1つのみです。
    test: TestReducer
  }),
  storeEnhancers(applyMiddleware(thunk))
)

export default store

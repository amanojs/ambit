import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// 作成したReducerを読み込みます。
import * as Test from './reducers/test'

// Storeの構造を定義します。
export type AppState = {
  test: Test.State
  // todo: TodoState のように複数宣言できます。
}

export const AppAction = {
  test: Test.Actions
}

export const AppReducer = {
  test: Test.Reducer
}

// Chromeの拡張機能REACT-DEVTOOLSを利用するための設定です。
const storeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers<AppState>(AppReducer),
  storeEnhancers(applyMiddleware(thunk))
)

export default store

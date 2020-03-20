import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// 作成したReducerを読み込みます。
import * as Test from './reducers/test'
import * as Post from './reducers/post'

// Storeの構造を定義します。
export type AppState = {
  test: Test.State
  post: Post.State
  // todo: TodoState のように複数宣言できます。
}

export const AppAction = {
  test: Test.Actions,
  post: Post.Actions
}

export const AppReducer = {
  test: Test.Reducer,
  post: Post.Reducer
}

// Chromeの拡張機能REACT-DEVTOOLSを利用するための設定です。
const storeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers<AppState>(AppReducer),
  storeEnhancers(applyMiddleware(thunk))
)

export default store

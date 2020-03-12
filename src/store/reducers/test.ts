import { actionCreatorFactory } from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

export interface TestState {
  text: string
}

export const initialState: TestState = {
  text: '初期値を設定します。'
}

const ac = actionCreatorFactory()

// データを操作する関数の型やIDを決めます。
// 大文字の変なやつは重複しなければ何でもOKです多分。
export const TestActions = {
  updateValue: ac<string>('TEST_ACTIONS_UPDATE_VALUE'),
  resetValue: ac('TEST_ACTIONS_RESET_VALUE')
}

export const TestReducer = reducerWithInitialState(initialState)
  .case(
    TestActions.updateValue,
    (state: TestState, text: TestState['text']) => {
      return { ...state, text }
    }
  )
  .case(TestActions.resetValue, (state: TestState) => {
    return { ...state, text: '' }
  })

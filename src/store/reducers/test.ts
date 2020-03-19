import { actionCreatorFactory } from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

export interface State {
  text: string
}

export const initialState: State = {
  text: '初期値を設定します。'
}

const ac = actionCreatorFactory()

// データを操作する関数の型やIDを決めます。
// 大文字の変なやつは重複しなければ何でもOKです多分。
export const Actions = {
  updateValue: ac<string>('TEST_ACTIONS_UPDATE_VALUE'),
  resetValue: ac('TEST_ACTIONS_RESET_VALUE')
}

export const Reducer = reducerWithInitialState(initialState)
  .case(Actions.updateValue, (state: State, text: State['text']) => {
    return { ...state, text }
  })
  .case(Actions.resetValue, (state: State) => {
    return { ...state, text: '' }
  })

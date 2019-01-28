import {Action} from 'redux'

enum ActionNames {
  INC = 'counter/increment',
  DEC = 'counter/decrement',
}

interface IncrementAction extends Action {
  type: ActionNames.INC
}
export const incrementAmount = (amount: number): IncrementAction => ({
  type: ActionNames.INC,
})

interface IDecrementAction extends Action {
  type: ActionNames.DEC
}

export const decrementAmount = (amount: number): IDecrementAction => ({
  type: ActionNames.DEC,
})

export interface ICounterState {
  num: number
}

export type CounterActions = IncrementAction | IDecrementAction

const initialState: ICounterState = {num: 0};

export default function reducer(state: ICounterState = initialState, action: CounterActions): ICounterState {
  switch (action.type) {
    case ActionNames.INC:
      return {num: state.num + 1}
    case ActionNames.DEC:
      return {num: state.num - 1}
    default:
      return state
  }
}

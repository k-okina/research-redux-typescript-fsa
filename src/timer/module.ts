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

export interface ITimerState {
  num: number
}

export type TimerActions = IncrementAction | IDecrementAction

const initialState: ITimerState = {num: 0};

export default function reducer(state: ITimerState = initialState, action: TimerActions): ITimerState {
  switch (action.type) {
    case ActionNames.INC:
      return {num: state.num + 1}
    case ActionNames.DEC:
      return {num: state.num - 1}
    default:
      return state
  }
}

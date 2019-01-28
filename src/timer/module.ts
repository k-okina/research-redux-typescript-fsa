import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('counter')

export const incrementAmount = actionCreator('increment')
export const decrementAmount = actionCreator('decrement')

export interface ITimerState {
  num: number
}

export type TimerActions = ReturnType<typeof incrementAmount> | ReturnType<typeof decrementAmount>

const initialState: ITimerState = {num: 0};

export default function reducer(state: ITimerState = initialState, action: TimerActions): ITimerState {
  switch (action.type) {
    case incrementAmount.type:
      return {num: state.num + 1}
    case decrementAmount.type:
      return {num: state.num - 1}
    default:
      return state
  }
}

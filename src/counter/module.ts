import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('counter')

export const incrementAmount = actionCreator('increment')
export const decrementAmount = actionCreator('decrement')

export interface ICounterState {
  num: number
}

export type CounterActions = ReturnType<typeof incrementAmount> | ReturnType<typeof decrementAmount>

const initialState: ICounterState = {num: 0};

export default function reducer(state: ICounterState = initialState, action: CounterActions): ICounterState {
  switch (action.type) {
    case incrementAmount.type:
      return {num: state.num + 1}
    case decrementAmount.type:
      return {num: state.num - 1}
    default:
      return state
  }
}

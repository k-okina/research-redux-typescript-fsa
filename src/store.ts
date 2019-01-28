// tslint:disable
import counter, {
  CounterActions,
  ICounterState,
  incrementAmount,
} from './counter/module'
import timer, {
  TimerActions,
  ITimerState,
} from './timer/module'
import {Action, createStore, combineReducers} from 'redux'

const store = createStore(combineReducers({counter, timer}))
export default store

export type ReduxState = {
  counter: ICounterState
  timer: ITimerState
}

export type ReduxAction = CounterActions | TimerActions | Action

// デバッグ用
interface Window {
  store: ReturnType<typeof createStore>
  incrementAmount: typeof incrementAmount,
}
declare var window: Window
window.store = store
window.incrementAmount = incrementAmount

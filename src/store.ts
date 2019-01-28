// tslint:disable
import counter, {CounterActions, ICounterState} from './counter/module'
import timer, {TimerActions, ITimerState} from './timer/module'
import {Action, createStore, combineReducers} from 'redux'

const store = createStore(combineReducers({counter, timer}))
export default store

export type ReduxState = {
  counter: ICounterState
  timer: ITimerState
}

export type ReduxAction = CounterActions | TimerActions | Action

interface Window {
  store: ReturnType<typeof createStore>
}
declare var window: Window
window.store = store

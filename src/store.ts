// tslint:disable
import counter, {CounterActions, ICounterState} from './counter/module'
import {Action, createStore, combineReducers} from 'redux'

export default createStore(combineReducers({counter}))

export type ReduxState = {
  counter: ICounterState
}

export type ReduxAction = CounterActions | Action

// constants
import { CounterActionType } from './Counter.constants';

// types
import { CounterActionIncrement, CounterActionDecrement } from './Counter.types';

type CounterState = number;

export type CounterAction = CounterActionIncrement | CounterActionDecrement;

const initialState: CounterState = 0;

export function counterReducer(state = initialState, action: CounterAction): CounterState {
	switch (action.type) {
		case CounterActionType.INCREMENT:
			return state + 1;
		case CounterActionType.DECREMENT:
			return state - 1;
		default:
			return state;
	}
}

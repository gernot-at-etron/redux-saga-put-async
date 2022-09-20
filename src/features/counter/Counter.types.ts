// actions
import { CounterActionType } from "./Counter.constants";

export interface CounterActionIncrement {
	type: CounterActionType.INCREMENT;
}

export interface CounterActionDecrement {
	type: CounterActionType.DECREMENT;
}

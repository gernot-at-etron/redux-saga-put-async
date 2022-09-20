// constants
import { CounterActionType } from "./Counter.constants";

// types
import { CounterActionDecrement, CounterActionIncrement } from "./Counter.types";

export const counterActions = {
	increment: (): CounterActionIncrement => ({
		type: CounterActionType.INCREMENT
	}),
	decrement: (): CounterActionDecrement => ({
		type: CounterActionType.DECREMENT
	}),
};

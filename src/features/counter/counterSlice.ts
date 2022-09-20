import { createSlice } from '@reduxjs/toolkit';

// types
import { RootState } from '../../app/store';

interface CounterState {
	counter: number;
}

const initialState: CounterState = {
	counter: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			console.log("state", state.counter);
			state.counter = state.counter + 2;
		},
		decrement(state) {
			state.counter--;
		},
	},
})

export const { increment, decrement } = counterSlice.actions;

export const selectCounter = (state: RootState) => state.counter.counter;

export const counterReducer = counterSlice.reducer;

import React from 'react'

interface CounterProps {
	value: number;
	onIncrement: () => void;
	onDecrement: () => void;
}

export const Counter: React.FC<CounterProps> = ({ value, onIncrement, onDecrement }) => {
	return (
		<div>
			<button onClick={onIncrement}>
				Increment
			</button>
			{' '}
			<button onClick={onDecrement}>
				Decrement
			</button>
			<hr />
			<div>
				Clicked: {value} times
			</div>
		</div>
	);
}
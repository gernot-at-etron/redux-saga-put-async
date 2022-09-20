import React from 'react'

interface CounterProps {
	value: number;
}

export const Counter: React.FC<CounterProps> = ({ value }) => {
	return (
		<div>
			{value} times
		</div>
	);
}
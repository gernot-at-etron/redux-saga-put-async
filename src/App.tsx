import './App.css';
import { useDispatch } from 'react-redux';

// Actions
import { counterActions } from './features/counter/Counter.actions';

// components
import { Counter } from './features/counter/Counter';

// hooks
import { useAppSelector } from './app/hooks';

// types
import { useCallback, useEffect } from 'react';

// singleton
import { Singleton } from './features/singleton/Singleton';

function App() {
	const dispatch = useDispatch();
	const count = useAppSelector((state) => state.counter);

	const increment = useCallback(() => {
		dispatch(counterActions.increment());
	}, [dispatch]);

	const decrement = useCallback(() => {
		dispatch(counterActions.decrement());
	}, [dispatch]);

	useEffect(() => {
		console.log("useEffect")
		Singleton.getInstance();

		setInterval(() => {
			increment();
			decrement();
		}, 10);
	}, [increment, decrement]);

	return (
		<Counter
			value={count}
			onIncrement={increment}
			onDecrement={decrement}
		/>
	);
}

export default App;

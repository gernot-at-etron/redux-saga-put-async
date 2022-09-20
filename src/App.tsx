import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';

// components
import { Counter } from './features/counter/Counter';

// hooks
import { useAppSelector } from './app/hooks';

// singleton
import { Singleton } from './features/singleton/Singleton';

function App() {
	const dispatch = useDispatch();
	const count = useAppSelector((state) => state.counter.counter);
	console.log(count)

	useEffect(() => {
		Singleton.getInstance();
	}, []);

	const start = () => {
		dispatch({
			type: "START"
		});
	}

	return (
		<>
			<Counter value={count} />
			<button onClick={start}>Click me</button>
		</>
	);
}

export default App;

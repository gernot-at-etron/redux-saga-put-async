import { all, put, takeEvery } from 'redux-saga/effects'

// actions
import { increment as incrementAction, decrement as decrementAction } from './counterSlice';

// singleton
import { Singleton } from '../../features/singleton/Singleton';

export function* helloSaga() {
	yield console.log('Hello Sagas!')
}

export function* start() {
	console.log("start()");
	yield put(incrementAction());
	yield put(decrementAction());
}

export function* increment() {
	console.log("increment()");
	const singleton = Singleton.getInstance();
	yield singleton.funcA("increment");
}

export function* decrement() {
	console.log("decrement()");
	const singleton = Singleton.getInstance();
	yield singleton.funcA("decrement");
}

export function* watchIncrement() {
	yield takeEvery(incrementAction().type, increment);
	yield takeEvery(decrementAction().type, decrement);
	yield takeEvery('START', start);
}

export function* rootSaga() {
	yield all([
		helloSaga(),
		watchIncrement()
	])
}

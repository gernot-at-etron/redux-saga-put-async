import { all, takeEvery } from 'redux-saga/effects'

// singleton
import { Singleton } from '../../features/singleton/Singleton';

export function* helloSaga() {
	yield console.log('Hello Sagas!')
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
	yield takeEvery('INCREMENT', increment);
	yield takeEvery('DECREMENT', decrement);
}

export function* rootSaga() {
	yield all([
		helloSaga(),
		watchIncrement()
	])
}

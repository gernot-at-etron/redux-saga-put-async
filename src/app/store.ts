import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// reducer
import { counterReducer } from '../features/counter/Counter.reducer';

// sagas
import { rootSaga } from '../features/counter/Counter.sagas';

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
	counter: counterReducer
});

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

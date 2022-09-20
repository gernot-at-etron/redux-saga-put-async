import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

// reducers
import { counterReducer } from '../features/counter/counterSlice';

// sagas
import { rootSaga } from '../features/counter/Counter.sagas';

// types
import { ThunkAction, Action } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false}), sagaMiddleware],
});

// Note: The sagaMiddleware will now listen to any dispatches that we make though redux (constantly running in the background).
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

export default store;

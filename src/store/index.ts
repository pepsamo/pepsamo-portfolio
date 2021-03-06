import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import section from './section/section';
import { useDispatch } from 'react-redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const rootReducer = combineReducers({
        section
    });

const store = configureStore({
    reducer: rootReducer,
    middleware: [logger] as const
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
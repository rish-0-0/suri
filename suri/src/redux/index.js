import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import app from './app';

const logger = createLogger();

const root = combineReducers({
    app,
});

export default applyMiddleware(thunk, logger)(createStore)(root);
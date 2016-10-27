import { combineReducers } from 'redux';
import counter from './counter';

export default function createReducer(asyncReducers) {
    return combineReducers({
        start: counter('start'),
        ...asyncReducers
    });
}
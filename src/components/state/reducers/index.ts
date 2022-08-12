import { combineReducers } from 'redux';
import celssReducer from './cellsReducer';

const reducers = combineReducers({
  cells: celssReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

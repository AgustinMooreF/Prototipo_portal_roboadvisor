// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import authSlice from './auth';
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, authSlice });

export default reducers;

import { combineReducers } from 'redux';
import ChartReducer from './chart_reducer';
import UserReducer from './user_reducer';

const rootReducer = combineReducers({
  coordinates: ChartReducer,
  userName: UserReducer
});

export default rootReducer;

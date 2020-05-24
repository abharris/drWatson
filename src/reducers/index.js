// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';
import WatsonReducer from './count-reducer';

const rootReducer = combineReducers({
  watsonResult: WatsonReducer,
});

export default rootReducer;

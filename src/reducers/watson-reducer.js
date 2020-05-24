import { ActionTypes } from '../actions';

const WatsonReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.SET_ASSESSMENT:
      return state + 1;
    case ActionTypes.CLEAR_ASSESSMENT:
      return state - 1;
    default:
      return state;
  }
};

export default WatsonReducer;

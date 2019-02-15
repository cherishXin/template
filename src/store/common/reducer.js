import * as constants from './constants';

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case constants.INCREMENT:
      return state + 1;
    case constants.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

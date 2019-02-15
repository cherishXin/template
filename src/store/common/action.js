import * as constants from './constants';

const incrementAct = () => ({
  type: constants.INCREMENT
});

const decrementAct = () => ({
  type: constants.DECREMENT
});

export const increment = () => dispatch => {
	dispatch(incrementAct());
};

export const decrement = () => dispatch => {
	dispatch(decrementAct());
};

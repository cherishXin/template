import * as constants from './constants';

export const getDataTableByItemRed = (state = [], action) => {
	switch (action.type) {
		case constants.GET_DATA_TABLE_BY_ITEM:
			return action.data;
		default:
			return state;
	}
};

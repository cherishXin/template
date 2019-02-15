import { get } from '@/axios';
import * as constants from './constants';
import models from './model';

const getDataTableByItemAct = data => ({
	type: constants.GET_DATA_TABLE_BY_ITEM,
	data
});

export const getDataTableByItem = params => dispatch => {
	get(models.getDataTableByItem, params).then((res) => {
    dispatch(getDataTableByItemAct(res));
  }).catch(() => {});
};

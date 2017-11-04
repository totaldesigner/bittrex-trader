import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';
import * as Actions from '../constants/bittrex';
import { del, get, post } from '../utils/request';

export const getMarketSummaries = createActionThunk(Actions.GET_MARKET_SUMMARIES, (args, store) => {
  return get('/api/bittrex/getMarketSummaries', null);
});

import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';
import * as Actions from '../constants/actions';
import { del, get, post } from '../utils/request';

const prefix = '/api/bittrex';

export const getMarkets = createActionThunk(Actions.GET_MARKETS, (args, store) => {
  return get(`${prefix}/getMarkets`);
});

export const getCurrencies = createActionThunk(Actions.GET_CURRENCIES, (args, store) => {
  return get(`${prefix}/getCurrencies`);
});

export const getTicker = createActionThunk(Actions.GET_TICKER, (args, store) => {
  return get(`${prefix}/getTicker`, args);
});

export const getMarketSummaries = createActionThunk(Actions.GET_MARKET_SUMMARIES, (args, store) => {
  return get(`${prefix}/getMarketSummaries`);
});

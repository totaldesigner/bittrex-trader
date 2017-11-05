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
  return get(`${prefix}/getTicker`, args /* market */);
});

export const getMarketSummaries = createActionThunk(Actions.GET_MARKET_SUMMARIES, (args, store) => {
  return get(`${prefix}/getMarketSummaries`);
});

export const getMarketSummary = createActionThunk(Actions.GET_MARKET_SUMMARY, (args, store) => {
  return get(`${prefix}/getMarketSummary`, args /* market */);
});

export const getOrderBook = createActionThunk(Actions.GET_ORDER_BOOK, (args, store) => {
  return get(`${prefix}/getOrderBook`, args /* market, type */);
});

export const getMarketHistory = createActionThunk(Actions.GET_MARKET_HISTORY, (args, store) => {
  return get(`${prefix}/getMarketHistory`, args /* market */);
});

export const buyWithLimit = createActionThunk(Actions.BUY_WITH_LIMIT, (args, store) => {
  return get(`${prefix}/buyWithLimit`, args /* market, quantity, rate */);
});

export const sellWithLimit = createActionThunk(Actions.SELL_WITH_LIMIT, (args, store) => {
  return get(`${prefix}/sellWithLimit`, args /* market, quantity, rate */);
});

export const cancelOrder = createActionThunk(Actions.CANCEL_ORDER, (args, store) => {
  return get(`${prefix}/cancelOrder`, args /* uuid */);
});

export const getOpenOrders = createActionThunk(Actions.GET_OPEN_ORDERS, (args, store) => {
  return get(`${prefix}/getOpenOrders`, args /* market */);
});

export const getBalances = createActionThunk(Actions.GET_BALANCES, (args, store) => {
  return get(`${prefix}/getBalances`);
});

export const getBalance = createActionThunk(Actions.GET_BALANCE, (args, store) => {
  return get(`${prefix}/getBalance`, args /* currency */);
});

export const getDepositAddress = createActionThunk(Actions.GET_DEPOSIT_ADDRESS, (args, store) => {
  return get(`${prefix}/getDepositAddress`, args /* currency */);
});

export const withdraw = createActionThunk(Actions.WITHDRAW, (args, store) => {
  return get(`${prefix}/withdraw`, args /* currency, quantity, address, paymentId */);
});

export const getOrder = createActionThunk(Actions.GET_ORDER, (args, store) => {
  return get(`${prefix}/getOrder`, args /* uuid */);
});

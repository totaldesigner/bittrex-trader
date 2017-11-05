import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';
import { Balance } from '../models/Balance';
import { Currency } from '../models/Currency';
import { Market } from '../models/Market';
import { MarketSummary } from '../models/MarketSummary';
import { Order } from '../models/Order';
import { OrderBook } from '../models/OrderBook';
import { Ticker } from '../models/Ticker';
import { Trade } from '../models/Trade';

export const markets = handleActions<TMarketsStoreState, IMarket[]>({
  [Actions.GET_MARKETS_SUCCEEDED]: (state, action) => {
    const payload = action.payload;
    return payload.map((json) => {
      return new Market(json);
    });
  },
}, []);

export const currencies = handleActions<TCurrenciesStoreState, ICurrency[]>({
  [Actions.GET_CURRENCIES_SUCCEEDED]: (state, action) => {
    const payload = action.payload;
    return payload.map((json) => {
      return new Currency(json);
    });
  },
}, []);

export const ticker = handleActions<TTickerStoreState, ITicker>({
  [Actions.GET_TICKER_SUCCEEDED]: (state, action) => {
    const payload = action.payload;
    return new Ticker(payload);
  },
}, null);

export const marketSummaries = handleActions<TMarketSummariesStoreState, IMarketSummary[]>({
  [Actions.GET_MARKET_SUMMARIES_SUCCEEDED]: (state, action) => {
    const payload = action.payload;
    return payload.map((json) => {
      return new MarketSummary(json);
    });
  },
}, []);

export const marketSummary = handleActions<TMarketSummaryStoreState, IMarketSummary>({
  [Actions.GET_MARKET_SUMMARY_SUCCEEDED]: (state, action) => {
    const payload = action.payload;
    return new MarketSummary(payload);
  },
}, null);

export const orderBook = handleActions<TOrderBookStoreState, IOrderBook>({
  [Actions.GET_ORDER_BOOK_SUCCEEDED]: (state, action) => {
    const payload = action.payload;
    return new OrderBook(payload);
  },
}, null);

export const trades = handleActions<TTradesStoreState, ITrade[]>({
  [Actions.GET_MARKET_HISTORY_SUCCEEDED]: (state, action) => {
    const payload = action.payload;
    return payload.map((json) => {
      return new Trade(json);
    });
  },
}, []);

export const openOrders = handleActions<TOpenOrdersStoreState, IOrder[]>({
  [Actions.GET_OPEN_ORDERS_SUCCEEDED]: (state, action) => {
    const payload = action.payload;
    return payload.map((json) => {
      return new Order(json);
    });
  },
}, []);

export const balances = handleActions<TBalancesStoreState, IBalance[]>({
  [Actions.GET_BALANCES_SUCCEEDED]: (state, action) => {
    const payload = action.payload;
    return payload.map((json) => {
      return new Balance(json);
    });
  },
}, []);

export const balance = handleActions<TBalanceStoreState, IBalance>({
  [Actions.GET_BALANCE_SUCCEEDED]: (state, action) => {
    const payload = action.payload;
    return new Balance(payload);
  },
}, null);

export const depositAddress = handleActions<TDepositAddressStoreState, string>({
  [Actions.GET_DEPOSIT_ADDRESS_SUCCEEDED]: (state, action) => {
    const payload = action.payload;
    return payload;
  },
}, null);

export const order = handleActions<TOrderStoreState, IOrder>({
  [Actions.GET_ORDER_SUCCEEDED]: (state, action) => {
    const payload = action.payload;
    return new Order(payload);
  },
}, null);

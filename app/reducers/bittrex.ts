import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';
import { MarketSummary } from '../models/MarketSummary';
import { Ticker } from '../models/Ticker';

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

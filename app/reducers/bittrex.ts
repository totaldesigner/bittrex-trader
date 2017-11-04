import { handleActions } from 'redux-actions';
import * as Actions from '../constants/bittrex';
import { MarketSummary } from '../models/bittrex/MarketSummary';

const initialState: Bittrex.TMarketSummariesStoreState = [];

export default handleActions<Bittrex.TMarketSummariesStoreState, Bittrex.IMarketSummary[]>({
  [Actions.GET_MARKET_SUMMARIES_STARTED]: (state, action) => {
    return [];
  },
  [Actions.GET_MARKET_SUMMARIES_SUCCEEDED]: (state, action) => {
    const payload = action.payload;
    const marketSummaries = payload.map((json) => {
      return new MarketSummary(json);
    });
    return marketSummaries;
  },
  [Actions.GET_MARKET_SUMMARIES_FAILED]: (state, action) => {
    return [];
  },
}, initialState);

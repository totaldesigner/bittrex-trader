import { RouteActions, routerReducer as routing } from 'react-router-redux';
import { combineReducers, Reducer } from 'redux';
import bittrex from './bittrex';

export interface IRootState {
  routing: RouteActions;
  marketSummaries: Bittrex.IMarketSummary[];
}

export default combineReducers<IRootState>({
  bittrex,
  routing,
});

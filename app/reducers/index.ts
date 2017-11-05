import { RouteActions, routerReducer as routing } from 'react-router-redux';
import { combineReducers, Reducer } from 'redux';
import { marketSummaries, ticker } from './bittrex';

export interface IRootState {
  routing: RouteActions;
  marketSummaries: IMarketSummary[];
  ticker: ITicker;
}

export default combineReducers<IRootState>({
  marketSummaries,
  routing,
  ticker,
});

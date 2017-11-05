import { RouteActions, routerReducer as routing } from 'react-router-redux';
import { combineReducers, Reducer } from 'redux';
import {
  balance,
  balances,
  marketSummaries,
  marketSummary,
  order,
  ticker,
  trades,
} from './bittrex';

export interface IRootState {
  balance: string;
  balances: string;
  marketSummaries: IMarketSummary[];
  marketSummary: IMarketSummary;
  order: IOrder;
  routing: RouteActions;
  ticker: ITicker;
  trades: ITrade[];
}

export default combineReducers<IRootState>({
  balance,
  balances,
  marketSummaries,
  marketSummary,
  order,
  routing,
  ticker,
  trades,
});

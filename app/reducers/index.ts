import { RouteActions, routerReducer as routing } from 'react-router-redux';
import { combineReducers, Reducer } from 'redux';

export interface IRootState {
  routing: RouteActions;
}

export default combineReducers<IRootState>({
  routing,
});

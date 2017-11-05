import { isNullOrUndefined } from 'util';
import { OrderType } from '../enums/OrderType';
import { OrderBookOrder } from './OrderBookOrder';

/**
 * Represents a single order book.
 */
export class OrderBook implements IOrderBook {

  private _buys: OrderBookOrder[];
  private _sells: OrderBookOrder[];

  constructor(json: any) {

    this._buys = [];
    if (!isNullOrUndefined(json.buy)) {
      for (const buyOrderJson of json.buy) {
        this._buys.push(new OrderBookOrder(buyOrderJson, OrderType.BUY));
      }
    }

    this._sells = [];
    if (!isNullOrUndefined(json.sell)) {
      for (const sellOrderJson of json.sell) {
        this._sells.push(new OrderBookOrder(sellOrderJson, OrderType.SELL));
      }
    }
  }

  get buys(): OrderBookOrder[] {
    return this._buys;
  }

  set buys(value: OrderBookOrder[]) {
    this._buys = value;
  }

  get sells(): OrderBookOrder[] {
    return this._sells;
  }

  set sells(value: OrderBookOrder[]) {
    this._sells = value;
  }
}

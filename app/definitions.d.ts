declare interface IBalance {
  currency: string;
  balance: number;
  available: number;
  pending: number;
  walletAddress: string;
  requested: boolean;
}

declare interface ICurrency {
  nameShort: string;
  nameLong: string;
  minimumConfirmation: number;
  transactionFee: number;
  active: number;
  type: string;
  baseAddress: string;
}

declare interface IMarket {
  marketCurrencyShort: string;
  baseCurrencyShort: string;
  marketCurrencyLong: string;
  baseCurrencyLong: string;
  minimumTradeSize: number;
  name: string;
  active: boolean;
  created: Date;
}

declare interface IMarketSummary {
  name: string;
  high: number;
  low: number;
  volume: number;
  last: number;
  baseVolume: number;
  timestamp: Date;
  bid: number;
  ask: number;
  openBuyOrders: number;
  openSellOrders: number;
  previousDay: number;
  created: Date;
}

declare interface IOrder {
  accountId: string;
  orderId: string;
  market: string;
  type: any;
  quantity: number;
  remainingQuantity: number;
  limit: number;
  reserved: number;
  remainingReserve: number;
  reservedCommission: number;
  remainingCommissionReserve: number;
  paidCommission: number;
  price: number;
  pricePerUnit: number;
  opened: Date;
  closed: Date;
  isOpen: boolean;
  sentinel: string;
  cancelInitiated: boolean;
  immediateOrCancel: boolean;
  conditional: boolean;
  condition: string;
  conditionTarget: number;
}

declare interface IOrderBook {
  buys: IOrderBookOrder[];
  sells: IOrderBookOrder[];
}

declare interface IOrderBookOrder {
  type: any;
  quantity: number;
  rate: number;
}

declare interface ITicker {
  bid: number;
  ask: number;
  last: number;
}

declare interface ITrade {
  id: number;
  timestamp: Date;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  fillType: any;
  orderType: any;
}

declare type TLanguage = 'ko' | 'en';

declare type TBalanceStoreState = IBalance;
declare type TBalancesStoreState = IBalance[];
declare type TCurrenciesStoreState = ICurrency[];
declare type TDepositAddressStoreState = string;
declare type TMarketsStoreState = IMarket[];
declare type TMarketSummariesStoreState = IMarketSummary[];
declare type TMarketSummaryStoreState = IMarketSummary;
declare type TOpenOrdersStoreState = IOrder[];
declare type TOrderStoreState = IOrder;
declare type TOrderBookStoreState = IOrderBook;
declare type TTickerStoreState = ITicker;
declare type TTradesStoreState = ITrade[];

declare module '*.json' {
  const value: any;
  export default value;
}

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

declare interface ITicker {
  bid: number;
  ask: number;
  last: number;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare type TLanguage = 'ko' | 'en';
declare type TMarketSummariesStoreState = IMarketSummary[];
declare type TTickerStoreState = ITicker;

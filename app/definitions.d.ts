declare type TLanguage = 'auto' | 'ko' | 'en' | 'es' | 'fr' | 'id' | 'ja' | 'th' | 'vi' | 'zh-CN' | 'zh-TW';


declare namespace Bittrex {
  export interface IMarketSummary {

  }
  export type TMarketSummariesStoreState = IMarketSummary[];
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare type TLanguage = 'auto' | 'ko' | 'en' | 'es' | 'fr' | 'id' | 'ja' | 'th' | 'vi' | 'zh-CN' | 'zh-TW';

declare module '*.json' {
  const value: any;
  export default value;
}

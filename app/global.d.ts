// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module '*.gif' {
  const resource: string;
  export = resource;
}

declare module '*.js' {
  const resource: string;
  export = resource;
}

declare module '*.png' {
  const resource: string;
  export = resource;
}

declare module '*.svg' {
  const resource: string;
  export = resource;
}

/* tslint:disable:interface-name */
declare interface Navigator {
  userLanguage: any;
}

/* tslint:disable:interface-name */
declare interface Window {
  webkitURL: any;
  devToolsExtension?(): (args?: any) => any;
}

interface System {
  import(request: string): Promise<any>;
}
declare const System: System;

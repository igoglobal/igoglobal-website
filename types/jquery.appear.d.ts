import 'jquery';

declare module 'jquery' {
    interface JQuery<TElement = HTMLElement> {
      appear(fn: (data?: any) => void, options?: any): JQuery<TElement>;
    }
  }
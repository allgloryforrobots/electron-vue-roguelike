/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
// declare global {
  interface Window {
    electronAPI?: {
      closeApp: () => void;
    };
    require: (module: string) => any;
  }
// }
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
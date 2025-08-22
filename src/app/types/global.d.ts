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
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
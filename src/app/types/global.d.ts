// declare global {
  interface Window {
    electronAPI?: {
      closeApp: () => void;
    };
    require: (module: string) => any;
  }
// }
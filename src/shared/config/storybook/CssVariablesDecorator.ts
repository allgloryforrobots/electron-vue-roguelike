import type { Decorator } from '@storybook/vue3';

const globalStyles = `
  .global-storybook-wrapper {
    --background-color: #1a1a1a;
    --background-color-medium: #191514;
    --border-color: #382F27;
    --text-color: #AEA08B;
    --hover-color: #3A3B38;

    --accent-color-1: #D4A373;
    --accent-color-2: #F0D9B5;
    --accent-color-3: #D1603D;
    --accent-color-4: #A8442C;
    --accent-color-5: #497A78;
    --accent-color-6: #79A29E;
    --accent-color-7: #FFFFFF;
    --accent-color-8: #8C6D49;
    --accent-color-gold: #D4AF37;

    --navbar-height: 75px;
    --gap: 10px;
    --cell-size: 20px;
    --grid-row-length: 50;

    --z-battlers: 1;
    --z-tooltip: 10;
    
    background-color: var(--background-color);
    color: var(--text-color);
    min-height: 100vh;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
`;

// Добавляем глобальные стили
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = globalStyles;
  document.head.appendChild(styleElement);
}

export const CssVariablesDecorator: Decorator = (story) => ({
  components: { story },
  template: `
    <div class="global-storybook-wrapper">
      <story />
    </div>
  `
});
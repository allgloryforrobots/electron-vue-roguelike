import type { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  async viteFinal(config) {
    const { default: vue } = await import('@vitejs/plugin-vue');
    config.plugins = config.plugins || [];
    config.plugins.push(vue());

    config.resolve ||= {};

    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
    }

    return config;
  }
};
export default config;

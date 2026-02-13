import type { StorybookConfig } from '@storybook/angular';
import path from 'path';
import { fileURLToPath } from 'url';

// When Storybook runs in an ESM environment (file://) __dirname is not defined.
// Convert import.meta.url to a filesystem path so we can build aliases portably.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding'
  ],
  framework: '@storybook/angular'
};

// Webpack alias to mock zone.js for zoneless Angular in Storybook preview
// This prevents Storybook from failing when the app intentionally doesn't use zone.js
// It points the 'zone.js' module to our lightweight mock under src/storybook-mocks/zone.js
// Note: keep this minimal and only for Storybook environment.
(config as any).webpackFinal = async (webpackConfig: any) => {
  webpackConfig.resolve = webpackConfig.resolve || {};
  webpackConfig.resolve.alias = webpackConfig.resolve.alias || {};
  webpackConfig.resolve.alias['zone.js'] = path.resolve(__dirname, '../src/storybook-mocks/zone.js');
  return webpackConfig;
};

export default config;

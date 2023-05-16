/* eslint-disable import/no-extraneous-dependencies */
import './global.css';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import rechartsTheme from './recharts-theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'padded',
  docs: {
    container: DocsContainer,
    page: DocsPage,
    theme: rechartsTheme,
  },
  backgrounds: {
    default: 'light',
  },
};

/* eslint-disable import/no-extraneous-dependencies */
import { addons } from '@storybook/manager-api';
import rechartsTheme from './recharts-theme';

addons.setConfig({
  theme: rechartsTheme,
});

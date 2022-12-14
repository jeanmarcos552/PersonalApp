import {extendTheme} from 'native-base';

export type ICustomTheme = typeof customTheme;

export const customTheme = extendTheme({
  colors: {
    // Add new color
    primary: {
      default: '#005e4f',
    },
  },
});

import React from 'react';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {ListShop} from './ListShop';
import {customTheme} from './theme/default';
import AppProvider from './hooks';

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={customTheme.colors.primary.default}
      />
      <AppProvider>
        <ListShop />
      </AppProvider>
    </NativeBaseProvider>
  );
}

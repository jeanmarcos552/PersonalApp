import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {ListShop} from './ListShop';
import {customTheme} from './theme/default';

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <ListShop />
    </NativeBaseProvider>
  );
}

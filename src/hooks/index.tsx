import React from 'react';
import {ShopListProvider} from './listaShop';

const AppProvider = ({children}: any) => (
  <ShopListProvider>{children}</ShopListProvider>
);

export default AppProvider;

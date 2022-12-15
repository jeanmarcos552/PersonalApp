import React, {createContext, useCallback, useContext, useState} from 'react';

interface ShopListContextData {
  totalItems: number;
  loading?: boolean;
  sumItems(value: number): void;
}

const ShopListContext = createContext<ShopListContextData>(
  {} as ShopListContextData,
);

interface IShopListProvider {
  children: React.ReactNode;
}
const ShopListProvider = ({children}: IShopListProvider) => {
  const [data, setData] = useState<ShopListContextData>({
    totalItems: 0,
  } as ShopListContextData);

  const sumItems = useCallback((value: number) => {
    setData(state => {
      return {...state, totalItems: value};
    });
  }, []);

  return (
    <ShopListContext.Provider
      value={{
        totalItems: data.totalItems,
        sumItems,
      }}>
      {children}
    </ShopListContext.Provider>
  );
};

function useShopList(): ShopListContextData {
  const context = useContext(ShopListContext);

  if (!context) {
    throw new Error('useShopList must be used within an ShopListProvider');
  }

  return context;
}

export {ShopListProvider, useShopList};

import React, { createContext, PropsWithChildren, useContext } from 'react';
import { ProductsStore } from '../state/ProductsStore';
import { OrdersStore } from '../state/OrdersStore';

type StoresContextValue = {
  productsStore: ProductsStore;
  ordersStore: OrdersStore;
};

const StoresContext = createContext<StoresContextValue>(
  {} as StoresContextValue
);

export const StoresProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const productsStore = new ProductsStore();
  const ordersStore = new OrdersStore(productsStore);

  return (
    <StoresContext.Provider value={{ productsStore, ordersStore }}>
      {children}
    </StoresContext.Provider>
  );
};

export const useStores = () => useContext(StoresContext);

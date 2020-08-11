import React, { createContext, PropsWithChildren, useContext } from 'react';
import { ProductsStore } from '../state/ProductsStore';

type StoresContextValue = {
  productsStore: ProductsStore;
};

const StoresContext = createContext<StoresContextValue>(
  {} as StoresContextValue
);

export const StoresProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const productsStore = new ProductsStore();

  return (
    <StoresContext.Provider value={{ productsStore }}>
      {children}
    </StoresContext.Provider>
  );
};

export const useStores = () => useContext(StoresContext);

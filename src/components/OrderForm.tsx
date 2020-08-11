import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useStores } from './StoresProvider';
import { useObserver } from 'mobx-react-lite';

export const OrderForm: React.FC = () => {
  const { productsStore, ordersStore } = useStores();
  const { register, handleSubmit } = useForm();

  const { fetchProducts } = productsStore;
  const { addOrder } = ordersStore;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const onSubmit = handleSubmit(data => {
    addOrder(data.drink, data.burger);
  });

  return useObserver(() => {
    const { isLoading, burgers, drinks } = productsStore;

    if (isLoading) {
      return <>Loading...</>;
    }

    return (
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Make an order</legend>
          <label htmlFor="drink">Drinks</label>
          <select ref={register} name="drink" id="drink">
            {drinks.map(({ name, displayName, price }) => (
              <option key={name} value={name}>
                {displayName} - ${price}
              </option>
            ))}
          </select>

          <label htmlFor="drink">Burgers</label>
          <select ref={register} name="burger" id="burger">
            {burgers.map(({ name, displayName, price }) => (
              <option key={name} value={name}>
                {displayName} - ${price}
              </option>
            ))}
          </select>

          <button type="submit">submit</button>
        </fieldset>
      </form>
    );
  });
};

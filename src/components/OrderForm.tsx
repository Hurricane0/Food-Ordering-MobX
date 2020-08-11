import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useStores } from './StoresProvider';
import { useObserver } from 'mobx-react-lite';

export const OrderForm: React.FC = () => {
  const { productsStore } = useStores();
  const { register, handleSubmit } = useForm();

  const { fetchProducts } = productsStore;

  useEffect(() => {
    fetchProducts();
  }, []);

  const submit = handleSubmit(data => {
    console.log(data);
  });

  return useObserver(() => {
    const { isLoading, burgers, drinks } = productsStore;

    if (isLoading) {
      return <>Loading...</>;
    }

    return (
      <form onSubmit={submit}>
        <fieldset>
          <legend>Make an order</legend>
          <label htmlFor="drink">Drinks</label>
          <select ref={register} name="drink" id="drink">
            {drinks.map(drink => (
              <option key={drink.name} value={drink.name}>
                {drink.displayName} - ${drink.price}
              </option>
            ))}
          </select>

          <label htmlFor="drink">Burgers</label>
          <select ref={register} name="burger" id="burger">
            {burgers.map(burger => (
              <option key={burger.name} value={burger.name}>
                {burger.displayName} - ${burger.price}
              </option>
            ))}
          </select>

          <button type="submit">submit</button>
        </fieldset>
      </form>
    );
  });
};

import React from 'react';
import { Product } from '../types';
import { useForm } from 'react-hook-form';

export const OrderForm: React.FC = () => {
  const drinks: Product[] = [{ name: 'cola', displayName: 'Cola', price: 4 }];
  const burgers: Product[] = [
    { name: 'beef', displayName: 'Beef Burger', price: 5 },
  ];

  const { register, handleSubmit } = useForm();

  const submit = handleSubmit(data => {
    console.log(data);
  });

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
};

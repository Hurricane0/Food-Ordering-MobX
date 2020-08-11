import React from 'react';
import './App.css';
import { OrderForm } from './components/OrderForm';
import { OrdersList } from './components/OrdersList';

function App() {
  return (
    <div className="App">
      <OrdersList />
      <OrderForm />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Category from './components/Category';

const App = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Category
        title='SELECT EQUIPMENT'
        defaultCategory='No equipment selected'
      ></Category>
    </div>
  );
};

export default App;

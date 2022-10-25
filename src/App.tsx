import React, { useEffect, useState } from 'react';
import './App.css';
import CategoryList from './components/Category';
import { getCategories } from './services/category.service';
import { Category } from './types/category';
const App = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    let result = getCategories();
    setCategories(result);
  }, []);

  if (categories.length === 0) {
    return <div>Loading</div>;
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <CategoryList
        title='SELECT EQUIPMENT'
        defaultCategory='No equipment selected'
        items={categories}
      ></CategoryList>
    </div>
  );
};

export default App;

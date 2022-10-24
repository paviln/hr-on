import React, { useState } from 'react';
import Button from '../Button';

interface Props {
  title: string;
  defaultCategory: string;
}

const Category = ({ title, defaultCategory }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  return (
    <div className='w-[280px] flex flex-col p-4 bg-secondary border border-primary border-solid rounded-[5px]'>
      <h1 className='pb-3 text-[#757983] font-normal font-sans'>{title}</h1>
      <Button className='text-xs' variant='solid' text={selectedCategory} />
    </div>
  );
};

export default Category;

import classNames from 'classnames';
import { useState } from 'react';
import { Category } from '../../types/category';
import { Item } from '../../types/item';
import CategorySection from './CategorySection';

interface Props {
  title: string;
  defaultCategory: string;
  items: Category[];
}

const Index = ({ title, defaultCategory, items }: Props) => {
  const [selectedItem, setSelectedItem] = useState<Item>();

  const populateSections = () => {
    let listItems = items?.map((i, index) => (
      <CategorySection
        key={index}
        category={i}
        selectedItemId={selectedItem?.id}
        onItemClicked={handleItemClicked}
      />
    ));

    return listItems;
  };

  const handleItemClicked = (categoryId: string, itemId: string) => {
    const item = items
      .find((i) => i.id === categoryId)
      ?.items.find((i) => i.id === itemId);
    setSelectedItem(item);
  };

  const selectedDisplayStyles = classNames(
    { 'bg-sky': selectedItem },
    'mt-3 py-3',
    'text-xs text-white text-center',
    'bg-primary rounded-lg'
  );

  return (
    <div className='w-[280px] flex flex-col p-[11px] pt-[15px] bg-secondary border border-primary border-solid rounded-[5px]'>
      <h1 className='pb-3 text-sm text-[#757983] font-bold font-sans'>
        {title}
      </h1>
      {populateSections()}
      <div
        className={selectedDisplayStyles}
        children={
          selectedItem?.title
            ? selectedItem?.title + ' selected'
            : defaultCategory
        }
      />
    </div>
  );
};

export default Index;

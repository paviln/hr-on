import { useState } from 'react';
import { Item } from '../../types/item';
import Button from '../Button';
import DropdownItem from './DropdownItem';

interface Props {
  title: string;
  selectedItemId?: string;
  items: Item[];
  onItemClicked: (id: string) => void;
}

const Index = ({ title, selectedItemId, items, onItemClicked }: Props) => {
  const [toggled, setToggled] = useState(false);

  const toggleDropdown = () => {
    setToggled(!toggled);
  };

  console.log(selectedItemId);

  const populateItems = () => {
    return items.map((i, index) => (
      <DropdownItem
        key={index}
        id={i.id}
        title={i.title}
        isSelected={i.id === selectedItemId}
        onItemClicked={onItemClicked}
      />
    ));
  };

  return (
    <div className='flex flex-col'>
      <Button
        className='py-[8px]'
        onClick={toggleDropdown}
        variant='toggle'
        isToggled={toggled}
      >
        {title}
      </Button>
      {toggled && (
        <div className='duration-300 mb-[15px]'>{populateItems()}</div>
      )}
    </div>
  );
};

export default Index;

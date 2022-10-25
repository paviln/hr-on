import { Category } from '../../types/category';
import Dropdown from '../Dropdown';

interface Props {
  category: Category;
  selectedItemId?: string;
  onItemClicked: (categoryId: string, itemId: string) => void;
}

const CategoryItem = ({
  category: { id, title, items },
  selectedItemId,
  onItemClicked,
}: Props) => {
  const handleItemClicked = (itemId: string) => {
    onItemClicked(id, itemId);
  };
  return (
    <div>
      <Dropdown
        title={title}
        items={items}
        selectedItemId={selectedItemId}
        onItemClicked={handleItemClicked}
      />
      <div className='border-primary solid border-b' />
    </div>
  );
};

export default CategoryItem;

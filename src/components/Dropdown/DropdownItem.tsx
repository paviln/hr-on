import classNames from 'classnames';
import Button from '../Button';

interface Props {
  id: string;
  title: string;
  isSelected: boolean;
  onItemClicked: (id: string) => void;
}

const DropdownItem = ({ id, title, isSelected, onItemClicked }: Props) => {
  const selectedClasses = classNames(
    { 'text-white bg-sky': isSelected },
    { 'text-[#757983]': !isSelected },
    'flex-none',
    'py-1 px-2',
    'text-xs font-[400]'
  );

  return (
    <div className='flex mt-[15px]'>
      <p className='flex-grow text-xs text-[#757983]'>{title}</p>
      <Button
        className={selectedClasses}
        variant='solid'
        onClick={() => onItemClicked(id)}
      >
        {isSelected ? 'Selected' : 'Select'}
      </Button>
    </div>
  );
};

export default DropdownItem;

import classNames from 'classnames';
import { ButtonProps } from '../../types/props';
import Icon, { Arrow } from '../Icon';
import { TextButton } from './TextButton';

export const ToggleButton = (props: ButtonProps) => {
  const iconClasses = classNames({
    'duration-300 rotate-180 pl-3': props.isToggled,
    'duration-300 pr-3': !props.isToggled,
  });
  return (
    <TextButton {...props}>
      <div className='flex justify-between items-center'>
        <p className='text-xs'>{props.children}</p>
        <div className={iconClasses}>
          <Icon fill='#EEE' component={<Arrow />} />
        </div>
      </div>
    </TextButton>
  );
};

export default ToggleButton;

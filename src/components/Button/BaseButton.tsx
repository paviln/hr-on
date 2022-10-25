import classNames from 'classnames';
import { ButtonProps } from '../../types/props';

export const BaseButton = ({ className, onClick, ...props }: ButtonProps) => {
  var btnClasses = classNames(
    className,
    'flex-1',
    'py-[13px]',
    'text-white',
    'font-sans',
    'font-sm',
    'text-center',
    'rounded-[5px]'
  );

  return (
    <button type='button' className={btnClasses} onClick={onClick}>
      {props.children}
    </button>
  );
};

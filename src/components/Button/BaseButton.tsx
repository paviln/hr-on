import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from '../../types/props';

export const BaseButton = ({ text, className }: ButtonProps) => {
  var btnClasses = classNames(
    className,
    'py-[13px]',
    'px-4',
    'text-white',
    'font-sans',
    'text-center',
    'rounded-[5px]'
  );

  return (
    <button type='button' className={btnClasses}>
      {text}
    </button>
  );
};

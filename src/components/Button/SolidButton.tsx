import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from '../../types/props';
import { BaseButton } from './BaseButton';

export const SolidButton = (props: ButtonProps) => {
  return (
    <BaseButton
      {...props}
      className={classNames(props.className, 'bg-primary')}
    />
  );
};

export default SolidButton;

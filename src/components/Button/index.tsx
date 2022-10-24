import React from 'react';
import { ButtonProps } from '../../types/props';
import { variant } from '../../types/variant';
import SolidButton from './SolidButton';
import { TextButton } from './TextButton';

interface Props extends ButtonProps {
  variant?: keyof variant;
}

const Button = (props: Props) => {
  const variants: variant = {
    default: <SolidButton {...props} />,
    solid: <SolidButton {...props} />,
    text: <TextButton {...props} />,
  };

  return variants[props.variant ?? 'default'];
};

export default Button;

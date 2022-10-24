import React from 'react';
import { ButtonProps } from '../../types/props';
import { BaseButton } from './BaseButton';

export const TextButton = (props: ButtonProps) => {
  return <BaseButton {...props} />;
};

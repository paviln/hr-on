import { MouseEventHandler, ReactElement } from 'react';

export interface ButtonProps {
  isToggled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: ReactElement | ReactElement[] | string;
}

export interface IconProps {
  fill?: string;
}

import { ButtonProps } from '../../types/props';
import { variant } from '../../types/variant';
import SolidButton from './SolidButton';
import { TextButton } from './TextButton';
import ToggleButton from './ToggleButton';

interface Props extends ButtonProps {
  variant?: keyof variant;
}

// TODO Find a better solution.
const Button = (props: Props) => {
  const variants: variant = {
    default: <SolidButton {...props} />,
    solid: <SolidButton {...props} />,
    text: <TextButton {...props} />,
    toggle: <ToggleButton {...props} />,
  };

  return variants[props.variant ?? 'default'];
};

export default Button;

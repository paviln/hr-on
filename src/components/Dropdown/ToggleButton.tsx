import classNames from 'classnames';
import { useState } from 'react';
import Icon, { Arrow } from '../Icon';

const Toggle = () => {
  const [toggled, setToggled] = useState(false);

  const btnClasses = classNames({
    'duration-300 rotate-180': toggled,
    'duration-300': !toggled,
  });

  const onClick = () => {
    setToggled(!toggled);
  };

  return (
    <button className={btnClasses} onClick={onClick}>
      <Icon fill='#EEE' component={<Arrow />} />
    </button>
  );
};

export default Toggle;

import React, { ReactElement } from 'react';

export * from './Arrow';

interface Props {
  fill?: string;
  component: ReactElement;
}

const Index = ({ component, ...other }: Props) => {
  return (
    <div className='w-3 h-3 text-primary'>
      {React.cloneElement(component, { ...other })}
    </div>
  );
};

export default Index;

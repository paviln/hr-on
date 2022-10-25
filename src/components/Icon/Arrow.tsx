import React from 'react';
import { IconProps } from '../../types/props';

export const Arrow = (props: IconProps) => (
  <svg
    viewBox='0 0 16 16'
    version='1.1'
    id='svg5'
    xmlSpace='preserve'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/2000/svg'
  >
    <defs id='defs2'>
      <linearGradient id='linearGradient5335'>
        <stop
          style={{ stopColor: '#000000', stopOpacity: '1' }}
          offset='0'
          id='stop5333'
        />
      </linearGradient>
    </defs>
    <g id='layer1'>
      <path
        id='rect585'
        style={{
          opacity: '0.8',
          fill: props.fill || '#000000',
          fillRule: 'evenodd',
          strokeWidth: '1.86224',
        }}
        d='m 1.015625,6.0800775 5.9687503,5.9687505 a 1.4363106,1.4363106 180 0 0 2.03125,0 L 14.984375,6.0800776 a 1.4363114,1.4363114 90.000012 0 0 0,-2.0312506 l -0.09765,-0.097655 a 1.4363103,1.4363103 1.8073706e-5 0 0 -2.03125,-6e-7 L 7.9765631,8.8300775 3.1210939,3.9746087 a 1.4363108,1.4363108 180 0 0 -2.0312501,0 l -0.074219,0.074219 a 1.4363107,1.4363107 90 0 0 -1e-7,2.03125 z'
      />
    </g>
  </svg>
);

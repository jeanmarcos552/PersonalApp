import React from 'react';
import Svg, {Path} from 'react-native-svg';

export interface IIcon {
  width?: number;
  color: string;
}
export const TrashIcon = ({width = 25, color}: IIcon) => {
  return (
    <Svg
      fill="none"
      width={width}
      height={width}
      stroke={color}
      viewBox="0 0 24 24">
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </Svg>
  );
};

export const AddIcon = ({width = 25, color}: IIcon) => {
  return (
    <Svg
      fill="none"
      width={width}
      height={width}
      stroke={color}
      viewBox="0 0 24 24">
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </Svg>
  );
};

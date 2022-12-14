import {Text, useTheme} from 'native-base';
import React from 'react';
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from 'react-native-bouncy-checkbox';

export interface ICheckboxApp extends IBouncyCheckboxProps {
  label?: string;
}
export function CheckboxApp({label, ...rest}: ICheckboxApp) {
  const theme = useTheme();

  return (
    <>
      <BouncyCheckbox
        fillColor={theme.colors.primary.default}
        size={26}
        {...rest}
      />

      <Text
        width="100%"
        flexShrink={1}
        textAlign="left"
        strikeThrough={rest.isChecked}
        _light={{
          color: rest.isChecked ? 'gray.400' : 'primary.default',
        }}
        _dark={{
          color: rest.isChecked ? 'gray.400' : 'coolGray.50',
        }}>
        {label}
      </Text>
    </>
  );
}

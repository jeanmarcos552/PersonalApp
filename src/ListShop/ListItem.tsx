import {HStack, Input, View} from 'native-base';
import React, {useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {CheckboxApp} from '../Components/Inputs/Checkbox';

type IItem = {
  id?: number;
  title?: string;
  status?: boolean;
  price?: number;
};

interface IListItem {
  data: {
    item: IItem;
  };
}

export const ListItem = ({data}: IListItem) => {
  const [currentItem, setCurrentItem] = useState<IItem>(data?.item);
  const inputRef = useRef<TextInput>(null);

  if (Object.keys(currentItem).length === 0) {
    return <View />;
  }

  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      paddingBottom={2}
      key={String(currentItem.id)}>
      <CheckboxApp
        onPress={() =>
          setCurrentItem(state => {
            inputRef?.current?.focus();
            return {...state, status: !state.status};
          })
        }
        isChecked={currentItem.status}
        label={currentItem.title}
      />

      <Input
        borderWidth={0}
        ref={inputRef}
        width={10}
        h={8}
        defaultValue={String(currentItem?.price)}
        backgroundColor="gray.200"
      />
    </HStack>
  );
};

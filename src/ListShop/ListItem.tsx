import {HStack, Input, theme, View} from 'native-base';
import React, {useRef, useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import {IItem} from '.';
import {CheckboxApp} from '../Components/Inputs/Checkbox';
import {useShopList} from '../hooks/listaShop';
import {TrashIcon} from '../Icons';

interface IListItem {
  item: IItem;
  index?: number;
}

export const ListItem = ({item}: IListItem) => {
  const [currentItem, setCurrentItem] = useState<IItem>(item);
  const [inputValue, setInputValue] = useState(item.price);

  const inputRef = useRef<TextInput>(null);
  const {sumItems} = useShopList();

  if (Object.keys(currentItem).length === 0) {
    return <View />;
  }

  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      paddingY={2}
      paddingX={1}
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
        onBlur={() => sumItems(Number(inputValue))}
        onChangeText={text => setInputValue(Number(text))}
        borderWidth={0}
        ref={inputRef}
        width={10}
        h={8}
        mr={2}
        textAlign="center"
        p={1}
        defaultValue={String(currentItem?.price)}
        backgroundColor="gray.200"
      />

      <Pressable onPress={() => setCurrentItem({})}>
        <TrashIcon width={20} color={theme.colors.red[400]} />
      </Pressable>
    </HStack>
  );
};

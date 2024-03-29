import React, {useCallback, useEffect} from 'react';
import {
  AddIcon,
  Box,
  FlatList,
  HStack,
  Input,
  Pressable,
  Text,
  useToast,
} from 'native-base';
import {useState} from 'react';
import {ListItem} from './ListItem';
import {View} from 'native-base';
import {useShopList} from '../hooks/listaShop';
import {SafeAreaView} from 'react-native';

export type IItem = {
  id?: number;
  title?: string;
  status?: boolean;
  price?: number;
};

export type IinstState = typeof instState;

const instState = [
  {
    id: 1,
    title: 'Code',
    status: true,
    price: 1,
  },
  {
    id: 2,
    title: 'Meeting with team at 9',
    status: false,
    price: 1,
  },
  {
    id: 3,
    title: 'Check Emails',
    status: false,
    price: 1,
  },
  {
    id: 4,
    title: 'Write an article',
    status: false,
    price: 1,
  },
];

interface IHeader {
  addItem: Function;
}
function Header({addItem}: IHeader) {
  const [inputValue, setInputValue] = useState('');

  return (
    <HStack space={2} mb={5}>
      <Input
        flex={1}
        onChangeText={v => setInputValue(v)}
        value={inputValue}
        placeholder="Add novo Item"
      />

      <Pressable
        justifyContent="center"
        onPress={() => {
          addItem(inputValue);
          setInputValue('');
        }}>
        <AddIcon width={20} />
      </Pressable>
    </HStack>
  );
}

export const ListShop = () => {
  const [list, setList] = useState(instState);
  const toast = useToast();
  const {totalItems, sumItems} = useShopList();

  const initListShop = useCallback(() => {
    if (list && sumItems) {
      const total = list.reduce(
        (acumulador: number, value: any) => acumulador + value.price,
        0,
      );
      sumItems(total);
    }
  }, [list, sumItems]);

  useEffect(() => {
    initListShop();
  }, [initListShop]);

  const addItem = (title: string) => {
    if (title === '') {
      toast.show({
        title: 'Please Enter Text',
      });
      return;
    }
    setList((prevList: any) => {
      return [
        ...prevList,
        {
          id: prevList.length + 1,
          title: title,
          status: false,
          price: 0,
        },
      ];
    });
  };

  return (
    <SafeAreaView>
      <Box p={2} w="100%">
        <FlatList
          height="full"
          ListHeaderComponent={<Header addItem={addItem} />}
          data={list}
          keyExtractor={item => String(item.id)}
          renderItem={item => <ListItem {...item} />}
          ListFooterComponent={
            <View>
              <Text>{totalItems}</Text>
            </View>
          }
        />
      </Box>
    </SafeAreaView>
  );
};

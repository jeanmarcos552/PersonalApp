import React from 'react';
import {
  Box,
  Button,
  Center,
  FlatList,
  HStack,
  Input,
  useToast,
} from 'native-base';
import {useState} from 'react';
import {ListItem} from './ListItem';

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
      <Button
        borderRadius="sm"
        variant="solid"
        onPress={() => {
          addItem(inputValue);
          setInputValue('');
        }}>
        Add
      </Button>
    </HStack>
  );
}

export const ListShop = () => {
  const [list, setList] = useState(instState);
  const toast = useToast();

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
          title: title,
          status: false,
        },
      ];
    });
  };

  return (
    <Center w="100%">
      <Box p={4} w="100%">
        <FlatList
          height="full"
          ListHeaderComponent={<Header addItem={addItem} />}
          data={list}
          keyExtractor={item => String(item.id)}
          renderItem={(item: any) => <ListItem data={item} />}
        />
      </Box>
    </Center>
  );
};

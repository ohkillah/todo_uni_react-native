import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { ADD_ITEM } from '../../store/ToDoList/actions';

const AddItem = () => {
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (userInput) {
      dispatch({ type: ADD_ITEM, item: userInput });
      setUserInput('');
    }
  };
  return (
    <View style={styles.addItem}>
      <Text style={styles.title}>To Do List</Text>
      <View style={styles.row}>
        <TextInput
          textAlign="left"
          style={styles.userInput}
          value={userInput}
          onChangeText={setUserInput}
        />
        <TouchableHighlight
          style={styles.addButton}
          onPress={() => handleSubmit()}
          underlayColor={'none'}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  addItem: {
    color: 'white',
    marginTop: '8%',
    flex: 2,
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Poppins-Black',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
  },
  userInput: {
    flexDirection: 'column',
    fontFamily: 'Poppins-Light',
    height: '80%',
    flex: 3,
    borderWidth: 1,
    borderColor: '#1B41A1',
    borderRadius: 10,
    padding: 10,
  },
  addButton: {
    flex: 1,
    flexDirection: 'column',
    width: 100,
    backgroundColor: '#1B41A1',
    height: '80%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: '5%',
    borderWidth: 1,
    borderColor: '#1B41A1',
    borderRadius: 10,
    alignItems: 'center',
  },
});

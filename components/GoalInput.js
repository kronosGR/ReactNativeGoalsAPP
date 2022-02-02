import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';

function GoalInput(props) {
  const [enteredGoal, setEnteredGoad] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoad(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoad('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' color='red' onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;

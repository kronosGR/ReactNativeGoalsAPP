import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';

function GoalInput(props) {
  const [enteredGoal, setEnteredGoad] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoad(enteredText);
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
        <Button title='ADD' onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: { borderColor: 'black', borderWidth: 1, padding: 10, width: '80%' },
});

export default GoalInput;

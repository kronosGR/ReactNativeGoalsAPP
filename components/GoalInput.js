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
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  input: { borderColor: 'black', borderWidth: 1, padding: 10, width: '80%', marginBottom:10 },
});

export default GoalInput;

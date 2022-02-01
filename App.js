import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { FlatList } from 'react-native-web';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoad] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoad(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setEnteredGoad('');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 30 },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: { borderColor: 'black', borderWidth: 1, padding: 10, width: '80%' },
});

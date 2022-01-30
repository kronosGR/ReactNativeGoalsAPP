import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 30 }}>
      <View>
        <TextInput
          placeholder='Course Goal'
          style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}
        />
        <Button title='ADD' />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});

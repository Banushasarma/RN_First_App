import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, { id: Math.random().toString(), value: enteredGoal }])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler} value={enteredGoal} placeholder="Enter your goal...!" style={styles.inputText} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}>
      </FlatList>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputText: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'gray',
    borderWidth: 1
  }
});

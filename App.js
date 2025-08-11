import { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {

  const [goalText, setGoalText] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  }

  const addGoalHandler = () => {
    setGoalsList(curGoalsList => [...curGoalsList, goalText]);
    setGoalText("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} value={goalText}
          placeholder='Your course goal'
          onChangeText={goalInputHandler} />

        <Button title='Add Goal' onPress={addGoalHandler} />

      </View>
      <View style={styles.goalContainer}>
        <Text>List of Goals</Text>
        <ScrollView>
          {goalsList.map((goal, index) => (
            <View style={styles.goalItems} key={index}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>)
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#cccccc',
    marginRight: 8,
    padding: 8
  },
  goalContainer: {
    flex: 4
  },
  goalItems: {
    margin: 6,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});

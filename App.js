import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goalsList, setGoalsList] = useState([]);

  const addGoalHandler = (goalText) => {
    setGoalsList(curGoalsList => [...curGoalsList, {
      text: goalText,
      key: Math.random().toString()
    }]);
  }

  return (
    <View style={styles.appContainer}>

      <GoalInput addGoalHandler={addGoalHandler} />

      <View style={styles.goalContainer}>
        <Text>List of Goals</Text>
        <FlatList data={goalsList} renderItem={(itemData) => {
          return (<GoalItem text={itemData.item.text} />)
        }} />
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
  goalContainer: {
    flex: 4
  }
});

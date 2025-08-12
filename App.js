import { useState } from 'react';
import {
  StyleSheet,Text,
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

  const deleteHandler = (key) => {
    console.log('Delete',key);
    setGoalsList(curGoalsList => {
      return curGoalsList.filter((goal) => goal.key !== key)
    })
  }

  return (
    <View style={styles.appContainer}>

      <GoalInput addGoalHandler={addGoalHandler} />

      <View style={styles.goalContainer}>
        <Text>List of Goals</Text>
        <FlatList data={goalsList} renderItem={(itemData) => {
          return (<GoalItem text={itemData.item.text}
            id={itemData.item.key}
            onDeleteItem={deleteHandler} />)
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

import { useState } from 'react';
import {
  Button,
  StyleSheet, Text,
  View,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goalsList, setGoalsList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (goalText) => {
    if (goalText !== "") {
      setGoalsList(curGoalsList => [...curGoalsList, {
        text: goalText,
        key: Math.random().toString()
      }]);
    }

    endAddGoalHandler();
  }

  const deleteHandler = (key) => {
    console.log('Delete', key);
    setGoalsList(curGoalsList => {
      return curGoalsList.filter((goal) => goal.key !== key)
    })
  }

  return (
    <View style={styles.appContainer}>

      <Button title='Add New Goal' color='#5e0acc'
        onPress={startAddGoalHandler} />

      {modalIsVisible && <GoalInput visible={modalIsVisible} addGoalHandler={addGoalHandler} closeModal={endAddGoalHandler} />}

      <View style={styles.goalContainer}>
        <Text>List of Goals</Text>
        <FlatList data={goalsList} renderItem={(itemData) => {
          return (<GoalItem text={itemData.item.text}
            id={itemData.item.key} onDeleteItem={deleteHandler} />)
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

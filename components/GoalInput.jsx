import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {

    const [goalText, setGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setGoalText(enteredText);
    }

    const addGoalHandler = () => {
        props.addGoalHandler(goalText);
        setGoalText('');
    }

    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} value={goalText}
                    placeholder='Your course goal'
                    onChangeText={goalInputHandler} />
                <Button title='Add Goal' onPress={addGoalHandler} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
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

});

export default GoalInput;
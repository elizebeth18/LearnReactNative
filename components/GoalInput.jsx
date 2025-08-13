import { StyleSheet, View, TextInput, Button, Image, Modal } from "react-native";
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
            <Modal visible={props.visible} animationType="fade">
                <View style={styles.inputContainer}>
                    <Image style={styles.image} source={require('../assets/images/goal.png')} />
                    <TextInput style={styles.textInput} value={goalText}
                        placeholder='Your course goal'
                        onChangeText={goalInputHandler} />

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Cancel' color='#f31282' onPress={props.closeModal} />
                        </View>
                        <View style={styles.button}>
                            <Button title='Add Goal' color='#5e0acc' onPress={addGoalHandler} />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b',
        padding: 16
    },
    textInput: {
        width: '100%',
        borderWidth: 1,
        color: '#120438',
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 8,
        padding: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 12,
        marginTop: 8
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 10
    }

});

export default GoalInput;
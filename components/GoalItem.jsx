import {
    StyleSheet,
    View, Text,
    Button,
} from "react-native";

const GoalItem = (props) => {

    const onDelete = () => {
        props.onDeleteItem(props.id);
    }

    return (
        <View style={styles.goalItems}>
            <Text style={styles.goalText}>{props.text}</Text>
            <Button title="Delete" style={styles.delButton} onPress={onDelete} />
        </View>
    );
}

const styles = StyleSheet.create({
    goalItems: {
        flex: 1,
        margin: 6,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#5e0acc',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    goalText: {
        color: 'white',
        width: '70%'
    },
    delButton: {
        width: '15%'
    }
})

export default GoalItem;
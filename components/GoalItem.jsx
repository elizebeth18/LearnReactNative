import {
    StyleSheet,
    View, Text,
    Button, Pressable,
} from "react-native";

const GoalItem = (props) => {

    const onDelete = () => {
        props.onDeleteItem(props.id);
    }

    return (
        <View style={styles.goalItems}>
            <Pressable android_ripple={{ color: '#dddddd' }} onPress={onDelete}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
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
    }
})

export default GoalItem;
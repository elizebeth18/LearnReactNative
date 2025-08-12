import {
    StyleSheet,
    View, Text
} from "react-native";

const GoalItem = (props) => {
    return (<View style={styles.goalItems}>
        <Text style={styles.goalText}>{props.text}</Text>
    </View>)
}

const styles = StyleSheet.create({
    goalItems: {
        margin: 6,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white'
    }
})

export default GoalItem;
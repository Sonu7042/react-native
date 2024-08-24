import { View, Text, StyleSheet } from "react-native";

const Responsive = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Background Color Test</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',  // Centers content vertically
        alignItems: 'center',      // Centers content horizontally
        backgroundColor: 'lightblue',
    },
    text: {
        textAlign: 'center',
        // No need for `textAlignVertical`, as `justifyContent` and `alignItems` handle centering
    },
});

export default Responsive;

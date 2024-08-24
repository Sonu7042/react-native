import { TouchableHighlight, Text, View, StyleSheet } from "react-native"


const TouchAbleHighlight = () => {
    return (
        <View style={styles.main}>
            <TouchableHighlight>
                <Text style={[styles.button, styles.success]}>Button</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={[styles.button, styles.primary]}>Button</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={[styles.button, styles.warn]}>Button</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={styles.button}>Button</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles= StyleSheet.create({
    main:{
        // flex:1,
        // backgroundColor:"red"

    },

    button:{
        backgroundColor:"#bbb",
        fontSize:25,
        color:"#fff",
        textAlign:"center",
        padding:10,
        margin:10,
        borderRadius:10,
        shadowColor:"black",
        elevation:10,
        shadowOpacity:1

    },
    primary:{backgroundColor:"blue"},
    warn:{backgroundColor:"gold"},
    success:{backgroundColor:"green"},

})

export default TouchAbleHighlight
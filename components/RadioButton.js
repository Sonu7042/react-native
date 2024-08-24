import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"


const RadioButton = () => {

    const skills = [
        {
            id: 1,
            name: "JAVA"
        },
        {
            id: 2,
            name: "PHP"
        },
        {
            id: 3,
            name: "NODE"
        },
        {
            id: 4,
            name: "JAVASCRIPT"
        },
        {
            id: 5,
            name: "PYTHON"
        },
        {
            id: 6,
            name: "DOTNET"
        },
    ]


    const [selectRadio, setSelectRadio] = useState(1)


    return (
        <View style={styles.main}>

            {
                skills.map((item, index) => {
                    return (
                        <TouchableOpacity onPress={() => setSelectRadio(item.id)} key={index}>
                            <View style={styles.radioWrapper}>
                                <View style={styles.radio}>
                                    {
                                        selectRadio === item.id ? <View style={styles.radioBg}></View> : null
                                    }

                                </View>
                                <Text style={styles.radioText}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>


                    )
                })
            }






        </View>
    )

}

const styles = StyleSheet.create({
    main: {
        // flex:1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },

    radio: {
        height: 40,
        width: 40,
        borderWidth: 2,
        borderRadius: 20,
        margin: 4
    },
    radioText: {
        fontSize: 20,
        margin: 4
    },
    radioWrapper: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },

    radioBg: {
        width: 28,
        height: 28,
        backgroundColor: "black",
        borderRadius: 20,
        margin: 4


    }



})



export default RadioButton
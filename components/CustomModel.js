import { useState } from "react"
import { View, Text, Button, StyleSheet } from "react-native"

export default CustomModels = () => {

    const [show, setShow] = useState(false)
    return (
        <View style={styles.container}>

            {show ?

                <View style={styles.model}>
                    <View style={styles.body}>
                        <Text style={{textAlign:"center", margin:60, fontSize:25}}>Some Text</Text>
                        <Button title="Close"  onPress={()=>setShow(false)}></Button>

                    </View>

                </View>
                : null
            }
            <Button title="Open Dialog" onPress={()=>setShow(true)}></Button>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 690,
        // flex:1,
        justifyContent: "flex-end"
    },
    model: {
        height: 690,
        backgroundColor: "rgba(50, 50, 50, 0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    body: {
        backgroundColor: "white",
        height: 300,
        width: 300,
        padding: 20,
        justifyContent: "flex-end"

    }


})
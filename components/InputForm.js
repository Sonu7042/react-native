import { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"

const InputFrom = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [display, setDisplay] = useState(false)

    const resetState=()=>{
        setDisplay(false)
        setUsername("")
        setPassword("")
    }


    return (

        <View>
            <Text style={{ fontSize: 25, textAlign: "center", marginBottom:10 }}>Simple Form in React Native</Text>


            <TextInput style={styles.inputText} value={username} onChangeText={(username) => setUsername(username)} placeholder="Enter username" />
            <TextInput style={styles.inputText} value={password} onChangeText={(password) => setPassword(password)} secureTextEntry={true} placeholder="Enter password" />


            <View style={{ marginBottom: 10 }}>
                <Button title="Press" onPress={()=>setDisplay(true)}></Button>
            </View>
            <Button title="Clear" onPress={resetState}></Button>


            <View>

                {display ?
                    <View style={{}}>
                        <Text style={{ fontSize: 25 }}>This is username {username}</Text>
                        <Text style={{ fontSize: 25 }}>This is Password {password}</Text>
                    </View>
                    : null
                }


            </View>


        </View>

    )
}

const styles = StyleSheet.create({
    inputText: {
        fontSize: 18,
        borderWidth: 2,
        marginBottom: 10,
        borderColor: "blue",
        color: "blue",
        padding: 10
    }


})




export default InputFrom
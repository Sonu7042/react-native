import { useState } from "react"
import { View, Text, TextInput, StyleSheet, Button } from "react-native"

const InputProperties=()=>{

    const [name, setName]=useState("")
    return(
        <View>
            <Text style={{fontSize:30}} > InputProperties</Text>
            <Text> Your name is {name} </Text>
            <TextInput
            style={sytles.textInput}
            value={name}
            placeholder="Enter your name" 
            onChangeText={(text)=>setName(text)}
            />

            <Button title="Press" onPress={()=>setName("")}/>

            
        </View>
    )
}


const sytles= StyleSheet.create({
    textInput:{
        fontSize:18,
        color: "blue",
        borderWidth:2,
        borderColor:"blue"




        
    }
})


export default InputProperties
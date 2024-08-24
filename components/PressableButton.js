import { View, Text, Pressable, StyleSheet } from "react-native"
import { presets } from "../babel.config"


const  PressableButton=()=>{
    return(
        <View style={styles.main}>
            <Pressable

            onPress={()=>console.warn("hello world")}
            onLongPress={()=>console.warn("long Press")}
            
            onPressIn={()=>console.warn("Press In")}
            onPressOut={()=>console.warn("Press Out")}
            
            >
            <Text style={styles.pressableBtn}>Hello World</Text>
            </Pressable>
            
        </View>

    )
}

const styles= StyleSheet.create({
    main:{
        height:690,
        justifyContent:"center"
    },
    pressableBtn:{
        backgroundColor:"blue",
        color:"#fff",
        textAlign:"center",
        padding:10,
        margin:20,
        borderRadius:20,
        fontSize:20,
        shadowColor:"black",
        elevation:10
        
        
    }
})

export default PressableButton
 
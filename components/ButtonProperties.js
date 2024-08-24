import { View, Text, Button} from "react-native"

const ButtonProperties=()=>{

 
  
  const hello1=()=>{
    console.warn("Working fine")
  }

  const hello2=(value)=>{
    console.warn(value)
  }

    return(
       <View>
        <Text>ButtonProperties</Text>
        <Button title="onPress" onPress={hello1} color={"red"}/>
        <Text> </Text>
        <Button title="onPress 2" onPress={()=>hello2("hello Sonu")} color={"red"}/>



       </View>

    )


}

export default ButtonProperties
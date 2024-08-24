import React,{Component} from "react";
import { View, Text, TextInput, Button} from "react-native";

class Teacher extends Component{

    constructor(){
        super()
        this.state={
            name:"sonu"
        }
    }

    update(val){
        this.setState({name:val})
    }

    show(){
        console.warn("Hello World")
    }

    render(){
        return(
            <View>
                <Text style={{color:"red", fontSize:25, textAlign:"center"}}>Class Component</Text>
                <Text style={{color:"blue", fontSize:20}}>{this.state.name}</Text>
                <TextInput  placeholder="Esnter your name" onChangeText={(text)=>this.update(text)}/>
                <Button title="Press"  onPress={this.show}></Button>
                <Student name={this.state.name}/>
            </View>
        )
    }
}


class Student extends Component{
   

    
    render(){
        return(
            <View>
                <Text style={{color:"red", fontSize:25, textAlign:"center"}}>Student name: {this.props.name}</Text>
                
            </View>
        )
    }
}



export default Teacher
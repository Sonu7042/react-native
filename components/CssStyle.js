import { View, Text, StyleSheet } from "react-native"
import ExStyle from '../style'


const CssStyle=()=>{
    return(
       <View>
        {/* This is inline css */}
        <Text style={{color:"red"}}>Hello World</Text>  


        {/* this is called Internal Css */}
        <Text style={style.sytleColor}>Hello World</Text>
        <Text style={style.sytleColor}>Hello World</Text>
        <Text style={style.sytleColor}>Hello World</Text>



        <Text style={ExStyle.sytleColor}>Hello World</Text>
        <Text style={[ExStyle.sytleColor, style.sytleColor, {backgroundColor:"pink"}]}>Hello World</Text>

        



       </View>
    )
}

const style= StyleSheet.create({
    sytleColor:{
        color: 'green',
        backgroundColor:"red",
        marginBottom:10,
        padding:10,
        borderRadius: 10,

    }
})





 export default CssStyle

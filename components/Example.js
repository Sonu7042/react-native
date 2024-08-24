import { View, Text, StyleSheet } from "react-native"


const Example=()=>{

    const users=[
        {
            id:1,
            name:"sonu",
            email:"sonu12@gmail.com"
        },

        {
            id:2,
            name:"jerry",
            email:"jerry@gmail.com"
        },

        {
            id:3,
            name:"tom",
            email:"tom@gmail.com"
        },

        {
            id:4,
            name:"tomy",
            email:"tomy@gmail.com"
        },
    ]
    return(
        <View>
            <Text style={{fontSize:25, textAlign:"center"}}>Dyanic Component</Text>
            

           <View>
            {users.map((item)=><UserData item={item}/>)}
           </View>


        </View>

    )
}


const UserData=(props)=>{
    const item= props.item
    return(
        <View style={styles.box}>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.email}</Text>
            </View>
    )
}

const styles= StyleSheet.create({
    box:{
        flexDirection:"row",
        borderWidth:2,
        borderColor:"blue",
        marginBottom:10,

    },
    item:{
        flex:1,
        fontSize:20,
        padding:10



    }
})


export default Example
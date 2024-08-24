
import { View, Text,FlatList, StyleSheet, ScrollView} from "react-native"

const ListWithFlatList=()=>{

    const users=[
        {
            id:1,
            name:"sonu"
        },

        {
            id:2,
            name:"tony"
        },

        {
            id:3,
            name:"jerry"
        },

        {
            id:4,
            name:"tom"
        },

        {
            id:1,
            name:"sonu"
        },

        {
            id:2,
            name:"tony"
        },

        {
            id:3,
            name:"jerry"
        },

        {
            id:4,
            name:"tom"
        },

        {
            id:1,
            name:"sonu"
        },

        {
            id:2,
            name:"tony"
        },

        {
            id:3,
            name:"jerry"
        },

        {
            id:4,
            name:"tom"
        }
    ]
    return(
        <View>
            <Text style={{fontSize:25, textAlign:"center"}}>List With Flat List in React Native</Text>
              
              {/* Iterate using FlatList component */}
             <FlatList
             data={users}
             renderItem={({item})=><Text style={styles.listItems}>{item.name}</Text>}
             keyExtractor={(item)=>{item.id}}
             />

             
              
              {/*  list itrate using map method */}
             <View style={{marginTop:20}}>
                <ScrollView>
                {users.map((item)=><Text style={styles.listItems} >{item.name}</Text>)}
                </ScrollView>
             </View>
        </View>
    )
}

const styles= StyleSheet.create({
    listItems:{
        fontSize:25,
        backgroundColor:"blue",
        margin:10,
        borderWidth:1,
        borderColor:"red",
        padding:10,
        color:"black"



    }
})


export default ListWithFlatList

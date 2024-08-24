import { View, Text, StyleSheet, ScrollView } from "react-native"

const DyanmicGrid=()=>{


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
            id:5,
            name:"rani"
        },

        {
            id:6,
            name:"ravi"
        },

        {
            id:7,
            name:"daya"
        },

        {
            id:7,
            name:"daya"
        },

        {
            id:7,
            name:"daya"
        },

        {
            id:7,
            name:"daya"
        },
        {
            id:7,
            name:"daya"
        },
        {
            id:7,
            name:"daya"
        },

        {
            id:7,
            name:"daya"
        },
        {
            id:7,
            name:"daya"
        },
        {
            id:7,
            name:"daya"
        },
        {
            id:7,
            name:"daya"
        },
    ]


    return(
        <View>
        <Text style={{fontSize:25, textAlign:"center"}}>Dyanmic Grid </Text>
         
        <ScrollView>

        <View style={{flex:1, flexDirection:"row", flexWrap:"wrap" }}>
        {users.map((item)=><Text style={styles.gridStyle}>{item.name}</Text>)}
        </View>
        
        </ScrollView>
       

        </View>



    )
}

const styles= StyleSheet.create({
    gridStyle:{
        fontSize:20,
        color:"#fff",
        backgroundColor:"blue",
        height: 120,
        width: 120,
        textAlign: "center",
        textAlignVertical:"center",
        margin: 5

    }
})


export default DyanmicGrid


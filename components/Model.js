import { useState } from "react"
import { View, Button, StyleSheet, Modal, Text } from "react-native"


const Model = () => {

    const [showModel, setShowModel]=useState(false)
    return (
        <View style={styles.main}>

            <View style={styles.buttonView}>
                <Button title="Open Modal" onPress={()=>setShowModel(true)} ></Button>
            </View>


            <Modal transparent={true} visible={showModel} animationType="slide" style={{marginTop:100}} >
                <View style={styles.modelCenterView}>
                    <View style={styles.modelView}>
                        <Text style={styles.modelText}>Hello Code step by step</Text>
                        <View style={styles.modelClose}>
                        <Button  title="Close Model"  onPress={()=>setShowModel(false)}/>
                        </View>
                        
                    </View>
                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        // flex:1,
        height:690

    },

    buttonView: {
        // flex:1,
        justifyContent: "flex-end",
        height:685
    },

    modelCenterView:{
        alignItems:"center",
        justifyContent:"center",
        height:690,
       
    },

    modelView:{
        backgroundColor:"#fff",
        padding:50,
        borderRadius:25,
        shadowColor:"black",
        elevation:10

    },

    modelText:{
        fontSize:20
    },

    modelClose:{
        borderRadius:100,
        marginTop:20
    }

    

})

export default Model
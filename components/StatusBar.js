import { useState } from "react";
import { View, Text, StatusBar, Button } from "react-native";

const MyStatusBar = () => {

    const [showBar, setShowBar]=useState(false)

    const [styleBar, setStyleBar]=useState("default")


    return (
        <View style={{height:690 , justifyContent:"center"}}>


            
            <StatusBar
                backgroundColor={"orange"}
                barStyle={styleBar}
                hidden={showBar}
            />

            <Button title="Toggle Button" onPress={()=>setShowBar(!showBar)} ></Button>
            <Button title="Update Style" onPress={()=>setStyleBar("dark-content")}></Button>
        </View>
    );
};

export default MyStatusBar;

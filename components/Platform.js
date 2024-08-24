import { View, Text, Platform } from "react-native"



const PlatForm = () => {
    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 25 }}>PlatForm: {Platform.OS}</Text>


            {
                Platform.OS ==='android'?

                    <View style={{ backgroundColor: "green", width: 100, height: 100, marginTop: 100 }}></View>
                    :
                    <View style={{ backgroundColor: "red", width: 100, height: 100, marginTop: 100 }}></View>

                    

            }

            <Text>{JSON.stringify(Platform)}</Text>



        </View>

    )
}


export default PlatForm

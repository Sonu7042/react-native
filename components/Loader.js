import { useState } from "react"
import { View, ActivityIndicator, Button } from "react-native"

const Loader = () => {
    
    const [show, setShow]=useState(false)


    const  showHide=()=>{
        setShow(true)

        setTimeout(()=>{
            setShow(false)
            console.warn("hello World")

        },3000)

    }

    return (
        <View>

            <View style={{marginTop:40}}>
                <ActivityIndicator size={40} animating={show} />
                <Button title="Show Loader" onPress={showHide}></Button>
            </View>


        </View>

    )
}


export default Loader
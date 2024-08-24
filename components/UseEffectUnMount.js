import { useState, useEffect } from "react"
import { View, Text, Button } from "react-native"

export default UseEffectUnMount = () => {
    const [show, setShow] = useState(true)
    return (
        <View>
            <Text style={{ fontSize: 30, textAlign: "center" }}>UnMount Using useEffect</Text>
            <Button title="Press" onPress={() => { setShow(!show) }}></Button>
            {
                show ? <Student /> : null
            }
        </View>
    )
}

const Student = () => {

    const timer = setInterval(() => {
        console.warn("useEffect called")
    }, 2000)



    useEffect(() => {
        return () => clearInterval(timer)
    })


    return (
        <View>
            <Text style={{ fontSize: 25, color: "red", marginBottom: 15 }}>This is Child Component</Text>
        </View>
    )
}

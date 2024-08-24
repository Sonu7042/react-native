import React, { useEffect, useState } from "react"
import { View, Text, Button } from "react-native"
const Hooks = () => {

    const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     console.warn("hello world")

    // }, [count])

    return (
        <View>
            <Text style={{ fontSize: 25, textAlign: "center", color: "red" }} >Life Cycle with useEffect </Text>
            <Text style={{ fontSize: 20 }}>{count}</Text>
            <Button title="Press" onPress={() => setCount(count + 1)} />
            <User data={count} />
        </View>
    )

}

const User = (props) => {
    const count = props.data

    useEffect(()=> {
        console.warn("show after props received")
    }, [count])

    return (
        <View>
            <Text style={{ fontSize: 25, color: "orange" }}>User Component : {count}</Text>
        </View>
    )
}

export default Hooks
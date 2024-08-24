import { View, Text, SectionList } from "react-native"


const SectionLists = () => {

    const users = [
        {
            id: 1,
            name: "sonu",
            data: ["html", "css", "javascript"]

        },
        {
            id: 2,
            name: "ravi",
            data: ["html", "css", "python"]

        },
        {
            id: 3,
            name: "tony",
            data: ["flutter", "css", "java"]

        }

    ]



    return (
        <View>
            <Text style={{ fontSize: 25, textAlign: "center" }}>SectionList</Text>

            <SectionList
                sections={users}
                renderSectionFooter={({ section: { name } }) => (<Text style={{fontSize:20, color:"red"}}>{name}</Text>)}
                renderItem={({ item }) => <Text style={{marginLeft:10}} >{item}</Text>}
                keyExtractor={(item, index) => item + index}
            />
        </View>
    )
}

export default SectionLists
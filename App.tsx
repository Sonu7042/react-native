import React, { useState } from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';
import UserData from './components/UserData';
import ButtonProperties from './components/ButtonProperties';
import CssStyle from './components/CssStyle';
import InputProperties from "./components/InputProperties";
import InputFrom from './components/InputForm';
import ListWithFlatList from './components/ListWithFlatList';
import DyanmicGrid from './components/DyanmicGrid';
import Example from './components/Example';
import SectionLists from './components/SectionLists';
import Teacher from './components/ClassComponents';
import Hooks from './components/Hooks';
import UseEffectUnMount from './components/UseEffectUnMount'
import Responsive from './components/Responsive';
import TouchAbleHighlight from './components/TouchAbleHighlight';
import RadioButton from './components/RadioButton';
import Loader from './components/Loader';
import Model from './components/Model';
import PressableButton from './components/PressableButton';
import MyStatusBar from './components/StatusBar';
import PlatForm from './components/Platform';
import WebsiteWebView from './components/WebSiteWebView'
import CustomModel from './components/CustomModel';
import Navigation from './components/Navigation';




function App(): React.JSX.Element {

  const [name, setName] = useState("Sonu")

  return (
    
     <View >
      <Text style={{ fontSize: 30, textAlign: 'center' }}>App</Text>
      {/* <UserData/> */}
      {/* <ButtonProperties /> */}
      {/* <Child name={name} />
      <Button title='Press' onPress={()=>setName("Rathore")}></Button> */}
      {/* <CssStyle /> */}
      {/* <InputProperties /> */}
      {/* <InputFrom/> */}
      {/* <ListWithFlatList/> */}
      {/* <DyanmicGrid/> */}
      {/* <Example/> */}
      {/* <SectionLists /> */}
      {/* <Teacher/> */}
      {/* <Hooks/> */}
      {/* <UseEffectUnMount /> */}
      {/* <Responsive/> */}
      {/* <TouchAbleHighlight/> */}
      {/* <RadioButton /> */}
      {/* <Loader /> */}
      {/* <Model/> */}
      {/* <PressableButton/> */}
      {/* <MyStatusBar/> */}
      {/* <PlatForm/> */}
      {/* <WebsiteWebView/> */}
      <CustomModel/>
      {/* <Navigation/> */}
      








    </View>
  );
}



//Props
// const Child=(props)=>{
//   return(
//     <View style={{backgroundColor:"pink"}}>
//       <Text style={{fontSize:30}}>{props.name}</Text>
//     </View>
//   )
// }


export default App;

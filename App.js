
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [name,setName] = useState('pavi');
  const [person,setperson] = useState({name:'keerthi', age:40});
  const[guy,setGuy] = useState('keerthi');
  const [year,setYear] = useState('30');

  const clickHander = () => {
    setName('nane');
    setperson({name:'vaishu', age:45});
  }
  return (
    <View style={styles.container}>
       <Text> My name is {name}</Text>
       <Text> His name is {person.name} and his age is {person.age}</Text>
        <View style={styles.buttonContainer}>
          <Button title='update state' onPress={clickHander}/>
        </View>
        <View style={styles.Textinput}>
          <Text> Enter name:</Text>
          <TextInput 
          multiline
           style={styles.input}
           placeholder="e.g. paviNane"
           onChangeText={(val) => setGuy(val)}/>
          <Text> Enter age:</Text>
          <TextInput 
           style={styles.input}
           keyboardType='numeric'
           placeholder="e.g. 40" 
           onChangeText={(val) => setYear(val)}/>
          <Text>name:{guy},age:{year}</Text>
       </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems:"center",
    justifyContent:"center" 
  },
  buttonContainer:{
    marginTop:20
  },
  Textinput:{
    alignItems:"center",
    justifyContent:"center" 
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  }
 
});



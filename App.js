
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,ScrollView,FlatList} from 'react-native';

export default function App() {
  const [name,setName] = useState('pavi');
  const [person,setperson] = useState({name:'keerthi', age:40});
  const[guy,setGuy] = useState('keerthi');
  const [year,setYear] = useState('30');
  const [people,setPeople] = useState([
    {name:'vaishu', id:'1'},
    {name:'nenePavi', id:'2'},
    {name:'achu', id:'3'},
    {name:'vasan', id:'4'},
    {name:'mannikam', id:'5'},
    {name:'annamali', id:'6'},
  ]);

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
        <View style={styles.Textinput} >
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
        {/* <View>
          { people.map((item) => {
            return(
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
            )
          })}
        </View>   use this method (or) get the below method are same but difference between the identical names*/}   
      
        <View>
             <FlatList
             numColumns={2}
             keyExtractor={(item) => item.id}
              data={people}
              renderItem={({item}) => (
              <Text style={styles.item}>{item.name}</Text>
            )}
            />
          </View>
      </View>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // // alignItems:"center",
    // // justifyContent:"center" ,
  
   
  },
  buttonContainer:{
    marginTop:20,
    alignItems:"center",
    // justifyContent:"center",
  },
  Textinput:{
    alignItems:"center",
    justifyContent:"center",
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:20,
    marginHorizontal:20
  }
 
});



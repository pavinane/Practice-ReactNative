
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}> Hello,pavi nane Let's Start</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Lorem ipsum dolor sit ament ..</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit ament ..</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit ament ..</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit ament ..</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit ament ..</Text>

      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7c6c8',
   alignItems:"center",
   justifyContent:"center"
    
  },
  header:{
    backgroundColor:'pink',
    padding:20,
  },
  boldText:{
    fontWeight:'bold',
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
  },
  text:{
    fontWeight:"bold",
    color:'red',
    fontSize:10,
    textAlign:"center",
  }
});

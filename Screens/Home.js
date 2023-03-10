
import React from 'react';
import {Button, ScrollView,StatusBar,StyleSheet,Text,View,} from 'react-native';




const  Home =() => {
 
  return (
    <View style={styles.container}>
        <Text>This is Home</Text>
        <Button onPress={()=> navigation.navigate('Login')}
        title="Go to Signup"/>

    </View>
    
   
  );
}

const styles = StyleSheet.create({
 });

export default Home;

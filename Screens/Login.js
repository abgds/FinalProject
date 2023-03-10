
import React from 'react';
import {Button, ScrollView,StatusBar,StyleSheet,Text,View,} from 'react-native';




const  Login =() => {
 
  return (
    <View style={styles.container}>
        <Text>This is Login</Text>
        <Button onPress={()=> navigation.navigate('Home')}
        title="Go to Home"/>

    </View>
    
   
  );
}

const styles = StyleSheet.create({
 });

export default Login;

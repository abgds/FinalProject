
import React, { useEffect } from 'react';
import {ScrollView,StatusBar,StyleSheet,Text,View,} from 'react-native';



const  Splash =(navigation) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home');

        },2000)

    },[])
 
  return (
    <View>
      <Text>
        This is Splash
      </Text>
    
    </View>
   
  );
}

const styles = StyleSheet.create({
 });

export default Splash;

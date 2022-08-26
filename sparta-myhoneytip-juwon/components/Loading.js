import React from 'react';
import klearicon from "../assets/klearicon.jpg"
import {View,Text,StyleSheet,Image} from 'react-native';
export default function Loading(){
return(<View style={styles.container}><Image
    source={klearicon}
    resizeMode={"contain"}
    style={styles.imageStyle1}/>
    <Text style={styles.title}>"강주원짱멋있음"</Text></View>)
}
const styles = StyleSheet.create({
container: {
//앱의 배경 색
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor: '#fdc453',
},
imageStyle1:{
  width:300,
  height:200,
},
title: {
fontSize:20,
fontWeight:'700'
}
})
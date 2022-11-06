import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import pid from '../assets/pid.png';
export default function App() {
    console.disableYellowBox = true;
    //return 구문 밖에서는 슬래시 두개 방식으로 주석
    return (
        <View><Image style = {styles.image} source ={pid}></Image></View>
    )


    }
    
    const styles = StyleSheet.create({
        image:{
            width:"100%",
        }
    })
    
import React from 'react';
import main from '../assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, Scrollview} from 'react-native';

export default function App() {
    console.disableYellowBox = true;
    //return 구문 밖에서는 슬래시 두개 방식으로 주석
    return (
        <Scrollview style ={styles.container}>
            <View style = {styles.topcontainer}><Text style={styles.toptext}>검색</Text></View>
           
            <View style={styles.middlecontainer} horizontal indicatorStyle={"white"}>
                <Text style ={styles.middletext}>#팔로잉</Text>
                <Text style ={styles.middletext}>#Yonex</Text>
                <Text style ={styles.middletext}>#배드민턴일상</Text>
                <Text style ={styles.middletext}>#라켓추천</Text>
                <Text style ={styles.middletext}>#가방추천</Text>
             </View> 

            <Scrollview style = {styles.lastcontainer}>
                <Image style = {styles.image1} source ={main}></Image>
                <Image style = {styles.image2} source ={main}></Image>
                <Image style = {styles.image3} source ={main}></Image>
                <Image style = {styles.image4} source ={main}></Image>

            </Scrollview>





 </Scrollview>


    )


    }
    
    const styles = StyleSheet.create({
        container:{
            backgroundColor:"yellow"

        },
            
        topcontainer:{
            backgroundColor:"lightgray",
        },
        middlecontainer:{
            backgroundColor: "gray",
        }
    })
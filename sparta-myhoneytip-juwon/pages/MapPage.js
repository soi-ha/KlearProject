import React from 'react';
import map from '../assets/map.jpg';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button} from 'react-native';

export default function App() {
    console.disableYellowBox = true;
   
    return (
        <ScrollView style={styles.Container}>
            <View style = {styles. viewcontainer} ><Image style = {styles.mainimage} source ={map}></Image></View>
            <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
                <Text style ={styles.textcontainer}>필터 ⇩</Text>
                <Text style ={styles.textcontainer}>가격 ⇩</Text>
                <Text style ={styles.textcontainer}>최근 ⇩</Text>
                <Text style ={styles.textcontainer}>거리 ⇩</Text>
                <Text style ={styles.textcontainer}>인기 ⇩</Text>
             </ScrollView> 

            <View style = {styles.cardcontainer}><Text style = {styles.Cardtext}> 4개의 체육관 </Text></View>
                
                
                <ScrollView style ={styles.lastcontainer}>
                    <View style ={styles.lastCard}><Text style ={styles.Cardtext}>스마트베뉴 \정보</Text></View>
                    <View style ={styles.lastCard}><Text style ={styles.Cardtext}>와이지</Text></View>
                    <View style ={styles.lastCard}><Text style ={styles.Cardtext}>용인구장</Text></View>
                    <View style ={styles.lastCard}><Text style ={styles.Cardtext}>용인구장2</Text></View>
                </ScrollView>


           




            

</ScrollView>
    )


}
    const styles = StyleSheet.create({
        Container : {
            width:"100%",
            height:"100%",
            
            

        },
        mainimage : {
            width:"100%",
            height:500,
            borderWidth:1,
        
        },
        middleContainer:{
            borderWidth:1,
        },
        textcontainer : {
            backgroundColor: "lightgray",
            margin: 10,
            
            

        },
        cardcontainer:{
            borderWidth:1,
            width:150,
            height:50,

        },
        Cardtext:{
            fontSize:15,
            margin :10,
        },
        lastcontainer:{
            padding:10,
            borderWidth:1,
        
        },
        lastCard:{
            paddingBottom:10,
            width:350,
            height:100,
            borderRadius:10,
            borderWidth:1,
        }
        
        

    })


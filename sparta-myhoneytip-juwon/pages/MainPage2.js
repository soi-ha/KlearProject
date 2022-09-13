import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert ,Button,} from 'react-native';
import guksen from "../assets/guksen.jpg"
import metan from "../assets/metan.png"
import sponet from "../assets/sponet.jpg" 
import map from "../assets/map.jpg" 
import { StatusBar } from 'expo-status-bar';


export default function App() {
return (
<ScrollView style={styles.container}>
<StatusBar style="black" />

<View style={styles.textContainer1}>   
<Image
source={sponet}
resizeMode={"contain"}
style={styles.mainimage}/>

<View style={styles.middlecontainer}>
<TouchableOpacity style ={styles.middlebutton}><Text style ={styles.middletext}>오늘의 배드민턴</Text></TouchableOpacity>
<TouchableOpacity style ={styles.middlebutton}><Text style ={styles.middletext}>클럽/동아리찾기</Text></TouchableOpacity> 
      </View>

</View>

<ScrollView style={styles.card}>
    <Text>용인시 나오고 지역선택할수있는 리스트 </Text>

<View style={styles.cardcontainer}>
<Image
source={guksen}
resizeMode={"contain"}
style={styles.cardimage}/>
<Text style ={styles.cardtext}>수지 체육공원 배드민턴장</Text>
</View> 


<View style={styles.cardcontainer}>
<Image
source={metan}
resizeMode={"contain"}
style={styles.cardimage}/>
<Text style ={styles.cardtext}>수지 체육공원 배드민턴장</Text>
</View>

<View style={styles.cardcontainer}>
<Image
source={map}
resizeMode={"contain"}
style={styles.cardimage}/>
<Text style ={styles.cardtext}>수지 체육공원 배드민턴장</Text>
</View> 
    

</ScrollView>


</ScrollView>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
marginTop: 35,
backgroundColor: '#ECECEC',
},

textContainer1: {
    flex: 1,
height: 300,
borderColor:'#000',
borderWidth:1, 
borderRadius:10,
margin:10,
},
middlecontainer:{
    flexDirection:"row",
    justifyContent: 'space-around',
    backgroundColor : "#fff",
    padding: 10,
    borderRadius: 10,
    height: 60,


},
middletext:{
    fontSize:17,
    padding: 6,
    
},

middleButtonText:{
    fontSize: 13,
    fontWeight: '500',
},


mainimage:{
    alignContent:"center",
    height: "75%",
    width:"100%",
    resizeMode: 'stretch',
    borderRadius:8,
},

card: {
    height: 500,
    borderColor:'#000',
    borderWidth:1, //태두리 지우기
    borderRadius:10,
    margin:10,
    },
    cardcontainer: {
        height: 300,
        borderColor:'#000',
        borderWidth:2,
        borderRadius:10,
        margin:10,
        },
        cardimage:{
            flex:2,
            marginTop:5,
            alignContent:"stretch",
            height: "100%",
            width:"100%",
},
cardtext: {
    flex:1,
    fontSize: 20,
    
},


    


});
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert ,Button,} from 'react-native';
import guksen from "../assets/guksen.jpg"
import metan from "../assets/metan.png"
import sponet from "../assets/sponet.jpg" 
import map from "../assets/map.jpg" 


export default function App() {
return (
<ScrollView style={styles.container}>
<View style={styles.textContainer1}>   
<Image
source={sponet}
resizeMode={"contain"}
style={styles.imageStyle1}/><Text>사진속에 글자 넣는법 알아야함</Text> 

<View style={styles.fixToText}>
        <Button
          title="오늘의 배드민턴"
          onPress={() => Alert.alert('오늘의 배드민턴 페이지로 연결')}
        />
        <Button
          title="클럽/동아리 찾기"
          onPress={() => Alert.alert('동아리 찾기 페이지로 연결')}
        />
      </View>

</View>

<View style={styles.textContainer2}>

<View style={styles.textContainer3}>
<Image
source={guksen}
resizeMode={"contain"}
style={styles.imageStyle2}/>
<Text>수지 체육공원 배드민턴장</Text>
</View> 


<View style={styles.textContainer3}>
<Image
source={metan}
resizeMode={"contain"}
style={styles.imageStyle2}/>
</View>

<View style={styles.textContainer3}>
<Image
source={map}
resizeMode={"contain"}
style={styles.imageStyle2}/>
</View> 
    

</View>


</ScrollView>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
marginTop: 35,
backgroundColor: '#ECECEC',
},
fixToText:{
    flexDirection:"row",
    justifyContent: 'space-between',
    backgroundColor : "#fff",
    padding: 10,
    borderRadius: 10,


},
middleButton2:{
    marginLeft: 110,
    width:125,
 height:50,
 padding:15,
 backgroundColor:"white",
 borderColor:"deeppink",
 borderRadius:15,
 margin:7
 
 },
middleButtonText:{
    fontSize: 13,
    fontWeight: '500',
},

textContainer1: {
    flex: 1,
height: 300,
borderColor:'#000',
//borderWidth:1, 가이드라인 지우기
borderRadius:10,
margin:10,
},
imageStyle1:{
    alignContent:"center",
    height: "75%",
    width:"100%",
    resizeMode: 'stretch',
    borderRadius:8,
},

textContainer2: {
    height: 500,
    borderColor:'#000',
    //borderWidth:1, //태두리 지우기
    borderRadius:10,
    margin:10,
    },
    textContainer3: {
        height: 300,
        borderColor:'#000',
        borderWidth:2,
        borderRadius:10,
        margin:10,
        },
        imageStyle2:{
            marginTop:5,
            alignContent:"stretch",
            height: "75%",
            width:"100%",
},
textStyle: {
textAlign:"center"
},


    


});
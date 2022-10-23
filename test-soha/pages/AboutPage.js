import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert ,Button,} from 'react-native';
import guksen from "../assets/guksen.jpg"
import metan from "../assets/metan.png"
import sponet from "../assets/sponet.jpg" 
import map from "../assets/map.jpg" 


export default function App() {
return (
<ScrollView style={styles.container}>
    <Image style ={styles.mainimage} source ={sponet}/>
<ScrollView style ={styles. middlecontainer} horizontal = {true}>
<TouchableOpacity style ={styles.middlebutton}><Text style ={styles.middletext}>오늘의 배드민중</Text></TouchableOpacity>
<TouchableOpacity style ={styles.middlebutton}><Text style ={styles.middletext}>클럽/동아리찾기</Text></TouchableOpacity> 
</ScrollView>
<ScrollView style ={styles. cardcontainer}><Text style = {styles.middlemaintext}>용인시/배드민턴장</Text>
<View style = {styles.card}><Image style ={styles.cardimage} source ={guksen}/><Text style ={styles.cardtext}>국민체육센터</Text>
</View>
</ScrollView>



</ScrollView>
);
}
const styles = StyleSheet.create({
container:{
    backgroundColor: '#ECECEC',
    
},
mainimage:{
    
    alignContent:"center",
    height: "75%",
    width:"100%",
    resizeMode: 'stretch',
    borderRadius:8,
},
middlecontainer:{
    borderWidth:1,
    height:10,
    

},

middlebutton:{
    width:10,
    height:10,
    backgroundColor: "yellow",
},
middletext: {
    fontSize:1,
    padding:1,
},
cardcontainer:{
    borderWidth:1,

},
middlemaintext:{
    fontsize:1,

},
card:{
    borderWidth:1,
    height:10,
    width:10,
},
cardimage:{
    flex:1,


},
cardtext:{
   flex:2,
}





});
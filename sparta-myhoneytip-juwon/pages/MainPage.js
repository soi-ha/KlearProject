import React,{useState,useEffect} from 'react';
import sponet from '../assets/sponet.jpg';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import data from '../data.json';
import Card from '../components/Card';
import Loading from '../components/Loading';
import { StatusBar } from 'expo-status-bar';
export default function MainPage({navigation,route}) {
console.disableYellowBox = true;
//return 구문 밖에서는 슬래시 두개 방식으로 주석
//기존 꿀팁을 저장하고 있을 상태
const [state,setState] = useState([])
//카테고리에 따라 다른 꿀팁을 그때그때 저장관리할 상태
const [cateState,setCateState] = useState([])
//컴포넌트에 상태를 여러개 만들어도 됨
//관리할 상태이름과 함수는 자유자재로 정의할 수 있음
//초기 상태값으로 리스트, 참거짓형, 딕셔너리, 숫자, 문자 등등 다양하게 들어갈 수 있음.
const [ready,setReady] = useState(true)
useEffect(()=>{
//뒤의 1000 숫자는 1초를 뜻함
//1초 뒤에 실행되는 코드들이 담겨 있는 함수
setTimeout(()=>{
//헤더의 타이틀 변경
navigation.setOptions({
title:'Klear Project'
})
//꿀팁 데이터로 모두 초기화 준비
let tip = data.tip;
setState(tip)
setCateState(tip)
setReady(false)
},1000)
},[])

const category = (cate) => {
if(cate == "전체보기"){
//전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
setCateState(state)
}else{
setCateState(state.filter((d)=>{
return d.category == cate
}))
}
}
let todayWeather = 5;
let todayCondition = "흐림"

return ready ? <Loading/> : (

<ScrollView stickyHeaderIndices={[2]} style={styles.container}>
<StatusBar style="black" />

<Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>

<ScrollView style={styles.menuContainer} horizontal indicatorStyle={"white"}>

<TouchableOpacity style={styles.menuButton} onPress={()=>{navigation.navigate('MainPage')}}>
<Text style={styles.menuButtonText}>홈</Text>
</TouchableOpacity> 

<TouchableOpacity style={styles.menuButton} onPress={()=>{navigation.navigate('MapPage')}}>
<Text style={styles.menuButtonText}>지도</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.menuButton} onPress={()=>{navigation.navigate('FeedPage')}}>
<Text style={styles.menuButtonText}>피드</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.menuButton} onPress={()=>{navigation.navigate('CalendarPage')}}>
<Text style={styles.menuButtonText}>캘린더</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.menuButton} onPress={()=>{navigation.navigate('ProfilePage')}}>
<Text style={styles.menuButtonText}>프로필</Text>
</TouchableOpacity>

</ScrollView>

<Image style={styles.mainImage} source={sponet}/>
<ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>

<TouchableOpacity style={styles.middleButton01} onPress={()=>{category('오늘의 배드민턴')}}><Text style={styles.middleButtonText}>오늘의 배드민턴</Text></TouchableOpacity>
<TouchableOpacity style={styles.middleButton01} onPress={()=>{category('클럽/동아리찾기')}}><Text style={styles.middleButtonText}>클럽/동아리찾기</Text></TouchableOpacity>

</ScrollView>
<View style={styles.cardContainer}>
{/* 하나의 카드 영역을 나타내는 View */}
{
cateState.map((content,i)=>{
return (<Card content={content} key={i} navigation={navigation}/>)
})
}
</View>
</ScrollView>
);
}
const styles = StyleSheet.create({
container: {
//앱의 배경 색
backgroundColor: 'white',
},
title: {
//폰트 사이즈
fontSize: 20,
//폰트 두께
fontWeight: '700',
//위 공간으로 부터 이격
marginTop:50,
//왼쪽 공간으로 부터 이격
marginLeft:20
},
weather:{
alignSelf:"flex-end",
paddingRight:20
},
mainImage: {
//컨텐츠의 넓이 값
width:'90%',
//컨텐츠의 높이 값
height:200,
//컨텐츠의 모서리 구부리기
borderRadius:10,
marginTop:10,
//컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
//각 속성의 값들은 공식문서에 고대로~ 나와 있음
alignSelf:"center"
},
middleContainer:{
marginTop:20,
marginLeft:10,
height:60
},
middleButtonAll: {
width:100,
height:50,
padding:15,

backgroundColor:"#20b2aa",
borderColor:"deeppink",
borderRadius:15,
margin:7
},
middleButton01: {
width:160,
height:50,
padding:15,
backgroundColor:"lightgray",
borderRadius:15,
margin:7, 
},

middleButtonText: {
color:"black",
fontWeight:"700",
//텍스트의 현재 위치에서의 정렬
textAlign:"center"
},
middleButtonTextAll: {
color:"#fff",
fontWeight:"700",
//텍스트의 현재 위치에서의 정렬
textAlign:"center"
},
cardContainer: {
marginTop:10,
marginLeft:10
},
menuContainer:{
    marginTop: 10,
    width:400,
    height:60,
    backgroundColor : 'lightgray',
},
menuButton:{
    // width:60,
    // height:50,
    backgroundColor:"#18D5FF",
    borderRadius:15,
    margin:8,
    padding: .5
},
menuButtonText:{
    fontSize:15,
    padding: 15
}
});
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import DetailPage from '../pages/DetailPage';
import MainPage from '../pages/MainPage';
import MapPage from '../pages/MapPage';
import FeedPage from '../pages/FeedPage';
import CalendarPage from '../pages/CalendarPage';
import ProfilePage from '../pages/ProfilePage';

const Stack = createStackNavigator();
const StackNavigator = () =>{
return (

<Stack.Navigator
screenOptions={{
headerStyle: {
backgroundColor: "white",
borderBottomColor: "white",
shadowColor: "white",
height:80
},
//헤더의 텍스트를 왼쪾에 둘지 가운데에 둘지를 결정
headerTitleAlign:'left',
headerTintColor: "#000",
headerBackTitleVisible: false
}}
>
{/* 컴포넌트를 페이지로 만들어주는 엘리먼트에 끼워 넣습니다. 이 자체로 이제 페이지 기능을 합니다*/}
<Stack.Screen name="MainPage" component={MainPage}/>
<Stack.Screen name="DetailPage" component={DetailPage}/>
<Stack.Screen name="MapPage" component={MapPage}/>
<Stack.Screen name="FeedPage" component={FeedPage}/>
<Stack.Screen name="CalendarPage" component={CalendarPage}/>
<Stack.Screen name="ProfilePage" component={ProfilePage}/>
</Stack.Navigator>
)
}
export default StackNavigator;
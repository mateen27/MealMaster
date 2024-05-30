import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailScreen from './screens/MealDetailScreen';
import FavoritesContextProvider from './store/context/Favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator(){
  return <Drawer.Navigator 
  screenOptions={
    { headerStyle:{ backgroundColor:"#333"},
      headerTintColor:'white',
      sceneContainerStyle:{backgroundColor:'#fff'},
      drawerContentStyle:{backgroundColor:"white"},
      drawerActiveTintColor:"black",
      drawerActiveBackgroundColor:"#FFCCCB",
      drawerInactiveTintColor:"black"
    }
}
  >
  <Drawer.Screen
   name="Categories"
   component={CategoriesScreen}
   options={{
    title:"All Categories",
    headerTitleAlign:"center",
    drawerIcon:({color})=><Entypo name="list" size={24} color={color} />
   }}
   />
   <Drawer.Screen
   name="Favorites"
   component={FavoritesScreen}
   options={{
    title:"Favorites",
    headerTitleAlign:"center",
    drawerIcon:({color})=><FontAwesome name="star" size={24} color={color} />
   }}
   />
 </Drawer.Navigator>
}
export default function App() {
  return (
    <FavoritesContextProvider>
   <NavigationContainer>
    <Stack.Navigator screenOptions={
    { headerStyle:{ backgroundColor:"#333"},
      headerTintColor:'white',
    }
} >
      <Stack.Screen name = "Drawer" component={DrawerNavigator} options={{headerShown:false}}/>
      <Stack.Screen name = "MealsOverView" component={MealsOverviewScreen}/>
      <Stack.Screen name = "MealDetailScreen" component={MealsDetailScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
   </FavoritesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

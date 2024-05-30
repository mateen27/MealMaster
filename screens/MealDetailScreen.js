import { useContext, useEffect } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import IconButton from "../assets/IconButton";
import { MEALS } from "../data/dummy-data";
import { Image,ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import MealsDetails from "../components/MealsDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import { FavoritesContext } from "../store/context/Favorites-context";

export default function MealsDetailScreen({navigation,route}){
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    
    const favoriteMealCtx = useContext(FavoritesContext)
    
    const mealIsFavorite = favoriteMealCtx.ids.includes(mealId)
    function changeFavoriteStatusHandler(){
        if(mealIsFavorite){
            favoriteMealCtx.removeFavorite(mealId)
        }
        else{
            favoriteMealCtx.addFavorite(mealId)
        }
    }

    useEffect(()=>{
        navigation.setOptions({
            headerRight:()=><IconButton icon={mealIsFavorite?"star":"star-outline"} color="#FFF" size={24} onPress={changeFavoriteStatusHandler}/>
        })
    },[navigation,changeFavoriteStatusHandler])

    return<ScrollView style={styles.rootContainer}>
        <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealsDetails 
        duration={selectedMeal.duration} 
        complexity={selectedMeal.complexity} 
        affordability={selectedMeal.affordability} />
        {/*<Text>{JSON.stringify(selectedMeal.ingredients)}</Text>*/}
        {/*<Text>{JSON.stringify(selectedMeal.steps)}</Text>*/}
       <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
            <SubTitle>Ingredients</SubTitle>
            <List>{selectedMeal.ingredients}</List>
            <SubTitle>Steps</SubTitle>
            <List>{selectedMeal.steps}</List>
            </View>
        </View>

        </ScrollView>
}

const styles=StyleSheet.create({
    image:{
        width:"100%",
        height: 350,
    },
    listContainer:{
        width:"80%"
    },
    listOuterContainer:{
        alignItems:'center',
    },
    rootContainer:{
        marginBottom:30
    },
    title:{
        fontSize:24,
        margin:8,
        fontWeight:'bold',
        textAlign:'center',
        color:'#D2691E',
    }
});
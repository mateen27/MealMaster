import { useContext } from "react";
import { View,Text, StyleSheet } from "react-native";
import { FavoritesContext } from "../store/context/Favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

export default function FavoritesScreen(){
    const favoriteMealCtx = useContext(FavoritesContext)
    const favoriteMeals = MEALS.filter(meal => favoriteMealCtx.ids.includes(meal.id))
    if(favoriteMeals.length===0){
        return <View style={styles.rootContainer}>
       <Text style={styles.text}>You have no favorite.</Text>
    </View>
}
    

    return <MealsList items={favoriteMeals}/>
}

const styles= StyleSheet.create({
    text:{
         fontSize:18,
         fontWeight:"bold",
         
    },
rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
}

})
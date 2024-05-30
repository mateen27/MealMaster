import { View,Text } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealsList from "../components/MealsList/MealsList"

 function MealsOverviewScreen({route}){
    const mealId = route.params.categoryId
    
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(mealId)>=0)

return <MealsList items={displayMeals}/>
 }
 export default MealsOverviewScreen
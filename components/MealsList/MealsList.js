import { Text } from "react-native";
import { View } from "react-native";
import MealItem from "./Mealitem";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";

export default function MealsList({items}){
    
    function renderMealItem(itemData){
      
        const item = itemData.item
        const mealItemProps = {
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            complexity:item.complexity,
            duration:item.duration,


        }
        
        return <MealItem {...mealItemProps}/>
    }
    
    return <FlatList data={items}
    renderItem={renderMealItem}
    style={styles.container}/>
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
  });
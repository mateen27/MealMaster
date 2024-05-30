import { View,Text } from "react-native"
import {CATEGORIES} from "../data/dummy-data"
import { FlatList } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"


function CategoriesScreen({navigation}){

  function renderCategoryItem(itemData){
    function pressHandler(){
      navigation.navigate("MealsOverView",{categoryId:itemData.id})
    }
    return <CategoryGridTile item={itemData} onPress={pressHandler}/>
  }
  


  return <FlatList
  data={CATEGORIES}
  renderItem={({item})=>renderCategoryItem(item)}
  numColumns={2}
  />
}
export default CategoriesScreen
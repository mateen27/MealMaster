import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import MealsDetails from "../MealsDetails";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({id,title,complexity,duration,affordability,imageUrl}){
  const navigation=useNavigation()

    return <View style={styles.mealItem}>
       <Pressable 
        onPress={()=>navigation.navigate('MealDetailScreen',{mealId:id})}
        android_ripple={{color:'#ccc'}}
        style={({pressed})=>[styles.button,pressed?styles.buttonPresssed:null]}>
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri:imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealsDetails duration={duration} complexity={complexity} affordability={affordability}/>
            </View>   
        </Pressable>
    </View>
}

const styles= StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 15,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerContainer:{
        borderRadius: 8,
    overflow: 'hidden',
    },
    buttonPresssed:{
        opacity:0.5
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    image:{
        width: '100%',
        height: 200,
    }
})
import { Pressable } from "react-native"
import { Platform } from "react-native"
import { View,Text,StyleSheet } from "react-native"

function CategoryGridTile({item,onPress}){
return <View style={[styles.gridItem,{backgroundColor:item.color}]}>
    <Pressable
        onPress={onPress}
        android_ripple={{color:'#ccc'}}
        style={({pressed})=>[styles.button,pressed?styles.buttonPresssed:null]}>
        <View style={styles.innerContainer}>
            <Text style={styles.title}>{item.title}</Text>
        </View>   

    </Pressable>
</View>
}export default CategoryGridTile

const styles=StyleSheet.create({
    gridItem:{
       flex:1,
       margin:16,
       height:150,
       borderRadius:7,
       elevation:12,
       shadowColor:'black',
       shadowOpacity:0.25,
       shadowOffset:{width:0,height:12},
       shadowRadius:8,
       overflow:Platform.OS=== 'android' ? 'hidden':'visible'
    },
    title:{
        fontWeight:"bold",
        fontSize:18,
    },
   button:{
    flex:1
   },
   buttonPresssed:{
    opacity:0.5
   },
   innerContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
   }
})
import { Text, View , StyleSheet} from "react-native";

export default function SubTitle({children}){
    return <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
    </View>
}

const styles= StyleSheet.create({
subtitle:{
    fontSize:20,
    fontWeight:"bold",
    color:"#D2691E",
    textAlign:'center',
},
subtitleContainer:{
padding:6,
marginHorizontal:12,
marginVertical:4,
borderBottomWidth:2,
borderColor:"#D2691E",
},
});
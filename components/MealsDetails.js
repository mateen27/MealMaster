import { StyleSheet } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"

export default function MealsDetails({duration,complexity,affordability}){
    return <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
}

const styles= StyleSheet.create({
    details:{
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        padding:9,
    },
    detailItem:{
        fontSize:16,
        marginHorizontal:10,
    },
})
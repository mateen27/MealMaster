import { StyleSheet, Text, View } from "react-native";

export default function List({children}){
return children.map((datapoint,idx)=><View key={idx} style={styles.listitem}>
    <Text style={styles.itemtext}>{datapoint}</Text>
</View>)
}

const styles =StyleSheet.create({
    listitem:{
        borderRadius:6,
        backgroundColor:"#e2b497",
        marginHorizontal:12,
        marginVertical:4,
        paddingVertical:4,
        paddingHorizontal:8
    },
    itemtext:{
        fontSize:18,
        color:"#000"
    }
})
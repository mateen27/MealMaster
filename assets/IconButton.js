import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function IconButton({color,icon,onPress,size}){
    return<Pressable onPress={onPress}>
        <Ionicons name={icon} color={color} size={size}/>
    </Pressable>
}
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native'
import Icon2 from "react-native-vector-icons/MaterialIcons"
import Color from '../../config/color'
export default function FloatButton (props){
    return(
        <TouchableOpacity style={styles.btn} onPress={props.add}>
            {/* <Text style={{fontSize:20}}>+</Text> */}
            <Icon2 name={"add"} size={30} color={"white"}></Icon2>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    btn:{
        position:"absolute",
        width:60,
        height:60,
        backgroundColor:Color.primary,
        bottom:20,
        right:20,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 3, //IOS
        //backgroundColor: '#fff', 
        elevation: 5
    },
    plus:{
        color:"white",
        fontSize:30
    }
})
import React from 'react'
import {StyleSheet} from 'react-native'
import Color from './Color'
import Dimension from "./Dimension";

const BaseStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    title:{
        fontSize: Dimension.titleSize,
        color: Color.white,
        fontWeight: 'bold'
    },
    icon:{
        width:25,
        height:25
    },
    text:{
        fontSize:14,
        color:Color.white
    },
    graytext:{
        fontSize:14,
        color:Color.gray
    },
    button:{
        width:200,
        height:50,
        margin:5
    },
    buttonL:{
        width:270,
        height:60,
        margin:5
    },
    buttonText:{
        fontSize:16,
        color:Color.white
    },
    subText:{
        fontSize: 12,
        color: Color.white,
    },
    input:{
        fontSize:14,
        color:Color.red
    }
});

export default BaseStyle
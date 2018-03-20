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
        color: Color.navTitleColor,
        fontWeight: 'bold'
    },
    icon:{
        width:25,
        height:25
    }
});

export default BaseStyle
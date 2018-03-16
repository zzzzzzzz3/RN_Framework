import React from 'react'
import {StyleSheet} from 'react-native'
import Color from './Color'
import AppUtil from '../utils/AppUtil'

const MainScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.white
    },
    headerTitle:{
        width:AppUtil.windowWidth,
        height:'100%',
        backgroundColor:'#e3e3e3',
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitleText:{
        color:'blue',
        fontSize:18,
        fontWeight:'bold'
    },
});
export default MainScreenStyles
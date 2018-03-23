import React,{Component} from 'react'

import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'
import Dimension from "../style/Dimension";
import Color from "../style/Color";


export default class TextButton extends Component{


    render(){
        return(
            <TouchableOpacity
                onPress={this.props.onPress}
                style={this.props.style}
            >
                <Text style={[styles.text,this.props.style]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
   text:{
       fontSize:Dimension.defaultSize,
       color:Color.white
   }
});
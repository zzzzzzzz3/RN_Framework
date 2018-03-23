import React from 'react'
import BaseScreen from "./BaseScreen";
import {
    View, StyleSheet, TouchableOpacity, Text
} from 'react-native'
import {connect} from "react-redux";
import BaseStyle from "../style/BaseStyles";
import Color from "../style/Color";
import Icon from "react-native-vector-icons/FontAwesome";
import {Toast} from "antd-mobile";


@connect()
export default class FeedbackScreen extends BaseScreen{

    static defaultProps = {
        title:'FEEDBACK'
    };

    showLeft(){
        return true
    }

    showRight(){
        return false
    }

    toRate = () => {
      Toast.info('rate',1)
    };

    sendFeedback = () => {
      Toast.info('feedback',1)
    };

    renderContent(){
        return(
            <View style={styles.content}>


                <Text style={styles.title}>RATE OUR APP</Text>
                <View style={styles.descBox}>
                    <Text style={styles.desc}>if you loce our app,please take a moment to rate our app in the app store.</Text>
                </View>
                <View style={{paddingLeft:30}}>
                    <TouchableOpacity
                        onPress={this.toRate}
                        style={styles.underLine}
                    >
                        <Text style={BaseStyle.graytext}>RATE</Text>
                        <Icon name='star' color={Color.gray} size={30} style={{marginRight:15}}/>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.sendFeedback}
                        style={styles.underLine}
                    >
                        <Text style={BaseStyle.graytext}>SEND FEEDBACK</Text>
                        <Icon name='thumbs-up' color={Color.gray} size={30} style={{marginRight:15}}/>

                    </TouchableOpacity>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    content:{
        padding:20,
    },
    underLine:{
        width:'100%',
        height:38,
        marginTop:10,
        borderColor:Color.gray,
        borderBottomWidth:1,
        paddingLeft:3,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        color:Color.darkgray,
        marginBottom:15
    },
    desc:{
        fontSize:12,
        color:Color.gray,
    },
    descBox:{
        paddingBottom:8,
        borderBottomWidth:1,
        borderColor:Color.gray,
        paddingHorizontal:3
    }
});
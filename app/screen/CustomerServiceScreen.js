import React from 'react'
import BaseScreen from "./BaseScreen";
import {
    View, StyleSheet, Text, TouchableOpacity
} from 'react-native'
import {connect} from "react-redux";
import Color from '../style/Color'
import BaseStyle from "../style/BaseStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import {Toast} from "antd-mobile";


@connect()
export default class CustomerServiceScreen extends BaseScreen{

    static defaultProps = {
        title:'CUSTOMER SERVICE'
    };

    showLeft(){
        return true
    }

    showRight(){
        return false
    }

    callPhone = () => {
      Toast.info('call phone',1)
    };

    sendEmail = () => {
        Toast.info('send email',1)
    };

    renderContent(){
        return(
            <View style={styles.content}>
                <View style={styles.item}>
                    <Text style={styles.title}>PHONE</Text>
                    <View style={styles.itemContent}>
                        <View >
                            <Text style={BaseStyle.graytext}>(210) 859-9677</Text>
                            <Text style={[BaseStyle.graytext,{marginTop:3}]}>Available M-F,7:00 AM - 7:00 PM CST</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.icon}
                            onPress={this.callPhone}
                        >
                            <Icon name='phone' color={Color.red} size={35}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>EMAIL</Text>
                    <View style={styles.itemContent}>
                        <View >
                            <Text style={BaseStyle.graytext}>support@mixolo.io</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.icon}
                            onPress={this.sendEmail}
                        >
                            <Icon name='envelope' color={Color.red} size={35}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    content:{
        flex:1,
        padding:20
    },
    item:{
        width:'100%',
        borderColor:Color.gray,
        borderBottomWidth:1,
        paddingHorizontal:5,
        paddingVertical:20
    },
    title:{
        fontSize:16,
        color:Color.black,
        marginBottom:10,
        marginLeft:5
    },
    itemContent:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        height:40,
        paddingLeft:20,
    },
    text:{
        fontSize:10,
        color:Color.gray
    },
    icon:{
        position:'absolute',
        right:10
    }
});
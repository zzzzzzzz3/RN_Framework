import React from 'react'
import BaseScreen from "./BaseScreen";
import {Toast} from 'antd-mobile'
import Color from "../style/Color";
import {Image, Text, TouchableOpacity, View, StyleSheet, ImageBackground} from "react-native";
import BaseStyle from "../style/BaseStyles";
import {connect} from "react-redux";
import NavigationActions from "react-navigation/src/NavigationActions";

@connect()
export default class ProfileScreen extends BaseScreen{
    static defaultProps = {
      title:'PROFILE'
    };

    showLeft(){
        return true
    }

    showRight(){
        return true
    }

    rightPress(){
        Toast.info('email',1)
    }

    leftPress(){
        this.props.dispatch(NavigationActions.navigate({routeName:'Messages'}))
    }

    rightIcon() {
        return {name: 'envelope', size: 25, color: Color.white}
    }

    leftIcon(){
        return {name:'bell',size:25,color:Color.white}
    }

    setting = () =>{
      this.props.dispatch(NavigationActions.navigate({routeName:'Setting'}))
    };

    renderContent(){
        return(
            <View style={BaseStyle.container}>
                <ImageBackground style={styles.userAvatar} source={require('../images/jobs.jpeg')}/>
                <View style={styles.infoContent}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Carolyn Walton Lynch,32</Text>
                        <TouchableOpacity
                            onPress={this.setting}
                        >
                            <Image source={require('../images/setting_icon.png')} style={BaseStyle.icon}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.localContent}>
                        <Image source={require('../images/local_icon.png')} style={BaseStyle.icon}/>
                        <Text style={styles.localText}>Baltimore,MD</Text>
                    </View>
                    <Text style={styles.desc}>Loves to meet new people andd try new things!Passionatioe about her family and Mixolo</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userAvatar:{
        flex:1
    },
    infoContent:{
        padding:20,
        backgroundColor:Color.BabyBlue
    },
    title:{
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    titleText:{
        fontSize:18,
        fontWeight:'bold'
    },
    localContent:{
        flexDirection:'row',
        width:'100%',
        marginBottom:20,
        marginTop:15
    },
    localText:{
        fontSize:16,
        marginLeft:10
    },
    desc:{
        fontSize:14,
    }
});
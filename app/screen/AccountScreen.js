import React from 'react'
import BaseScreen from "./BaseScreen";
import {
    View, StyleSheet, TouchableOpacity, Text, Image
} from 'react-native'
import {connect} from "react-redux";
import BaseStyle from "../style/BaseStyles";
import Color from "../style/Color";
import AppUtil from "../utils/AppUtil";
import Icon from "react-native-vector-icons/FontAwesome";
import {Toast} from "antd-mobile";
import NavigationActions from "react-navigation/src/NavigationActions";
import CustomerServiceScreen from "./CustomerServiceScreen";


@connect()
export default class AcountScreen extends BaseScreen{

    constructor(props){
        super(props);
        this.state = {...this.state,mixoloShow:false}
    }

    static defaultProps = {
        title:'ACCOUNT'
    };

    showLeft(){
        return true
    }

    showRight(){
        return false
    }

    forFree = () =>{
      Toast.info('forFree',1)
    };

    syncCalendar = () => {
      Toast.info('sync calendar',1)
    };

    openMixolo = () => {
        this.setState((previous) => {
            return {...previous,mixoloShow:!previous.mixoloShow}
        })
    };

    toFeedback = () =>{
      this.props.dispatch(NavigationActions.navigate({routeName:'Feedback'}))
    };

    toHowMixolo = () => {
        this.props.dispatch(NavigationActions.navigate({routeName:'HowMixoloWorks'}))
    };

    toCustomerService = () => {
        this.props.dispatch(NavigationActions.navigate({routeName:'CustomerService'}))
    };

    toTerms = () => {
        Toast.info('terms',1)
    };

    toPrivacy = () => {
        Toast.info('toPrivacy',1)

    };

    toAbout = () => {
        Toast.info('toAbout',1)

    };


    renderMixolo = () => {
        if(this.state.mixoloShow){
            return(
                <View style={{width:'100%',paddingLeft:30}}>
                    <TouchableOpacity
                        onPress={this.toHowMixolo}
                        style={styles.underLine}
                    >
                        <Text style={BaseStyle.graytext}>HOW MIXOLO WORKS</Text>
                        <Icon name='angle-right' color={Color.gray} size={30} style={{marginRight:15}}/>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.toCustomerService}
                        style={styles.underLine}
                    >
                        <Text style={BaseStyle.graytext}>CUSTOMER SERVICE</Text>
                        <Icon name='angle-right' color={Color.gray} size={30} style={{marginRight:15}}/>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.toTerms}
                        style={styles.underLine}
                    >
                        <Text style={BaseStyle.graytext}>TERMS OF SERVICE</Text>
                        <Icon name='angle-right' color={Color.gray} size={30} style={{marginRight:15}}/>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.toPrivacy}
                        style={styles.underLine}
                    >
                        <Text style={BaseStyle.graytext}>PRIVACY</Text>
                        <Icon name='angle-right' color={Color.gray} size={30} style={{marginRight:15}}/>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.toAbout}
                        style={styles.underLine}
                    >
                        <Text style={BaseStyle.graytext}>ABOUT MIXOLO</Text>
                        <Icon name='angle-right' color={Color.gray} size={30} style={{marginRight:15}}/>

                    </TouchableOpacity>
                </View>
            )
        }else {
            return null
        }
    };

    renderContent(){
        return(
            <View style={styles.content}>
                <TouchableOpacity style={styles.underLine}
                                  onPress={this.forFree}
                >
                    <Text style={BaseStyle.graytext}>TRY PREMINUM FOR FREE</Text>
                    <Icon name='dollar' color={Color.gray} size={30} style={{marginRight:15}}/>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={this.syncCalendar}
                    style={styles.underLine}
                >
                    <Text style={BaseStyle.graytext}>SYNC CALENDAR</Text>
                    <Image source={require('../images/events_icon.png')} style={{width:30,height:30,marginRight:5,tintColor:Color.gray}} />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.toFeedback}
                    style={styles.underLine}
                >
                    <Text style={BaseStyle.graytext}>FEEDBACK</Text>
                    <Icon name='angle-right' color={Color.gray} size={30} style={{marginRight:15}}/>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.openMixolo}
                    style={styles.underLine}
                >
                    <Text style={BaseStyle.graytext}>MIXOLO</Text>
                    <Icon name={this.state.mixoloShow?'angle-down':'angle-right'} color={Color.gray} size={30} style={{marginRight:15}}/>

                </TouchableOpacity>
                {
                    this.renderMixolo()
                }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    content:{
        paddingHorizontal:20,
        alignItems:'center'
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
        justifyContent:'space-between'
    },
});
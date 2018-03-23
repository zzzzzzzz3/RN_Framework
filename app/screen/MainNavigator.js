import React from 'react'
import {
    TabNavigator,
    TabBarBottom
} from 'react-navigation'
import {Image,StyleSheet} from "react-native";
import Color from '../style/Color'
import SearchScreen from "./SearchScreen";
import Reservations from "./Reservations";
import MyEvents from "./MyEvents";
import ProfileScreen from "./ProfileScreen";


const MainNavigator = TabNavigator(
    {
        Search:{
            screen: SearchScreen,
            navigationOptions:{
                title:'SEARCH',
                tabBarIcon:({focused,tintColor}) => (
                    <Image
                        source={require('../images/search.png')}
                        style={[styles.icon,{tintColor:tintColor}]}
                    />
                )
            }
        },
        Reservation:{
            screen:Reservations,
            navigationOptions:{
                title:'REVERVATIONS',
                tabBarIcon:({focused,tintColor}) => (
                    <Image
                        source={require('../images/time.png')}
                        style={[styles.icon,{tintColor:tintColor}]}
                    />
                )
            }
        },
        Events:{
            screen:MyEvents,
            navigationOptions:{
                title:'MY EVENTS',
                tabBarIcon:({focused,tintColor}) => {
                    return(

                        <Image
                            source={require('../images/events_icon.png')}
                            style={[styles.icon,{tintColor:tintColor}]}
                        />
                    )
                }
            }
        },
        Profile:{
            screen:ProfileScreen,
            navigationOptions:{
                title:'PROFILE',
                tabBarIcon:({focused,tintColor}) => (
                    <Image
                        source={require('../images/me.png')}
                        style={[styles.icon,{tintColor:tintColor}]}
                    />
                )
            }
        },
    },
    {
        tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled:false,
        animationEnabled:false,
        lazyLoad:false,
        backBehavior:'none',
        tabBarOptions:{
            activeTintColor:Color.red,
            inactiveTintColor:Color.gray,
            labelStyle:{
                fontSize:10,

            },
            style:{
                height:72,
                padding:10
            }
        },
        // navigationOptions:{
        //     headerTintColor:'black'
        // },
        // cardStyle:({backgroundColor:'blue'})

    }
);

const styles = StyleSheet.create({
    icon:{
        width:30,
        height:30
    }
});

export default MainNavigator
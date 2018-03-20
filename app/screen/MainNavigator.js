import React from 'react'
import {
    TabNavigator,
    TabBarBottom
} from 'react-navigation'
import MainScreen from './MainScreen'
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
                        source={focused?require('../images/search_selected.png'):require('../images/search.png')}
                        style={styles.icon}
                    />
                )
            }
        },
        Reservation:{
            screen:Reservations,
            navigationOptions:{
                title:'REVERVATION',
                tabBarIcon:({focused,tintColor}) => (
                    <Image
                        source={focused?require('../images/search_selected.png'):require('../images/search.png')}
                        style={styles.icon}
                    />
                )
            }
        },
        Events:{
            screen:MyEvents,
            navigationOptions:{
                title:'MY EVENTS',
                tabBarIcon:({focused,tintColor}) => (
                    <Image
                        source={focused?require('../images/search_selected.png'):require('../images/search.png')}
                        style={styles.icon}
                    />
                )
            }
        },
        Profile:{
            screen:ProfileScreen,
            navigationOptions:{
                title:'PROFILE',
                tabBarIcon:({focused,tintColor}) => (
                    <Image
                        source={focused?require('../images/search_selected.png'):require('../images/search.png')}
                        style={styles.icon}
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
        lazyLoad:true,
        backBehavior:'none',
        tabBarOptions:{
            activeTintColor:Color.red,
            inactiveTintColor:Color.gray,
            labelStyle:{
                fontSize:12,
                marginBottom:10
            },
            style:{
                height:72
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
        width:25,
        height:25
    }
});

export default MainNavigator
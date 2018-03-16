import React, {Component} from 'react';
import {
    Dimensions,
    View,
    Text
} from "react-native";
import {connect} from 'react-redux';

const width = Dimensions.get('window').width;

@connect()
class MainScreen extends Component {
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>hello</Text>
            </View>
        );
    }
}

const MainScreenConfig = {
    screen: MainScreen,
    navigationOptions:{
        headerTitle:(
            <View style={{width:width,height:'100%',backgroundColor:'#e3e3e3',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'blue',fontSize:18,fontWeight:'bold'}}>Home</Text>
            </View>
        ),
    }
};

export default MainScreenConfig

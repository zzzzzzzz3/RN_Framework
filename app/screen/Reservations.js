import React, {PureComponent} from 'react'
import {
    View,
    StyleSheet,
    FlatList, TouchableOpacity, Image, Text, ImageBackground,

} from 'react-native'
import BaseScreen from "./BaseScreen";
import {Toast} from 'antd-mobile'
import {connect} from "react-redux";
import BaseStyle from "../style/BaseStyles";
import Color from '../style/Color'

@connect()
export default class Reservations extends BaseScreen{

    static defaultProps = {
        title:'RESERVATIONS'
    };

    constructor(props){
        super(props);
    }

    renderContent() {
        let data = [];
        for (let i = 0; i < 10; i++) {
            let item = {
                id: `item ${i}`,
                value: 'item'
            };
            data.push(item)
        }
        return (
            <View style={BaseStyle.container}>
                <List
                    data={data}
                />
            </View>
        )
    }
}

class ListItem extends PureComponent{
    _onPress = () => {
        this.props.onPressItem(this.props.id)
    };

    _timePress = () => {
      this.props.onTimePress(this.props.id)
    };

    _localPress = () => {
      this.props.onLocalPress(this.props.id)
    };

    render() {
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={this._onPress}
                >
                    <ImageBackground source={require('../images/events_bg.jpeg')} style={styles.imageBackground}>
                        <Text style={styles.title}>WE GO HIGH! MIXOLO HAPPY HOUR</Text>
                        <Text style={[styles.text,{marginBottom:25}]}>May 23,2017 @ 6:00 PM</Text>
                        <Text style={styles.text}>Sky Bar at Mt.Washington Tavern</Text>
                        <Text style={[styles.subText,{marginBottom:15}]}>(410)611-1079</Text>
                        <Text style={styles.text}>5700 Newbury Street</Text>
                        <Text style={styles.text}>Baltimore,MD 21209</Text>
                        <Text style={styles.subText}>(11.2 miles from you)</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={styles.bottom}>
                    <TouchableOpacity
                        onPress={this._timePress}
                    >
                        <Image source={require('../images/time.png')} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._localPress}
                    >
                        <Image source={require('../images/local_icon.png')} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

class List extends PureComponent {

    _keyExtractor = (item, index) => item.id;

    _onItemPress = (id) => {
        Toast.info(id, 1)
    };

    _onTimePress = (id) =>{
      Toast.info(id,1)
    };

    _onLocalPress = (id) => {
      Toast.info(id,1)
    };


    _renderItem = ({item}) => (
        <ListItem
            id={item.id}
            onPressItem={this._onItemPress}
            onTimePress={this._onTimePress}
            onLocalPress={this._onLocalPress}
        />
    );


    render() {
        return (
            <FlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}

const styles = StyleSheet.create({
    imageBackground:{
        width:'100%',
        padding:25
    },
    title:{
        fontSize:16,
        fontWeight:'500',
        marginBottom:25,
        color:Color.white
    },
    text:{
        fontSize:14,
        color:Color.white
    },
    subText:{
        color:Color.white,
        fontSize:12
    },
    icon:{
        width:25,
        height:25,
        tintColor:Color.red
    },
    bottom:{
        flexDirection:'row',
        width:'100%',
        paddingVertical:10,
        justifyContent:'space-around'
    }
});
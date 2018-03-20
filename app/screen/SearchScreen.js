import React, {PureComponent} from 'react'
import {
    View,
    StyleSheet,
    Text,
    FlatList, Image,
    TouchableOpacity,
} from 'react-native'
import Color from '../style/Color'
import BaseStyle from "../style/BaseStyles";
import BaseScreen from "./BaseScreen";
import {Toast} from 'antd-mobile'
import Input from "antd-mobile/es/input-item/Input";
import {connect} from "react-redux";
import Dimension from "../style/Dimension";

@connect()
export default class SearchScreen extends BaseScreen {

    renderNavbar() {
        return (
            <SearchBar/>
        )
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
        console.log('============>', data);
        return (
            <View style={BaseStyle.container}>
                <List
                    data={data}
                />
            </View>
        )
    }
}


class SearchBar extends PureComponent {


    pickdate = () => {
        Toast.info('toast', 1)
    };

    render() {
        return (
            <View style={styles.searchbar}>
                <TouchableOpacity
                    onPress={this.pickdate}
                    style={styles.leftbox}
                >
                    <Image source={require('../images/search.png')} style={styles.left}/>
                </TouchableOpacity>

                <View style={styles.rightBox}>
                    <TouchableOpacity
                        onPress={this.pickdate}
                    >
                        <Image source={require('../images/search.png')} style={styles.icon}/>
                    </TouchableOpacity>
                    <Input style={styles.input}/>
                    <TouchableOpacity
                        onPress={this.pickdate}
                    >
                        <Image source={require('../images/search.png')} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.pickdate}
                    >
                        <Image source={require('../images/search.png')} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

class ListItem extends PureComponent {

    _onPress = () => {
        this.props.onPressItem(this.props.id)
    };

    render() {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={this._onPress}

            >
                <Image source={require('../images/bg.jpg')} style={styles.itemImage}/>
                <View style={styles.itemContent}>
                    <Text style={styles.itemTitle}>Good things are brewing in Baltimore with Mixolo</Text>
                    <View style={styles.itemTextContent}>
                        <Image source={require('../images/search.png')} style={styles.itemIcon}/>
                        <Text style={styles.itemText}> March 26,2017 @ 5:00 Pm</Text>
                    </View>
                    <View style={styles.itemTextContent}>
                        <Image source={require('../images/search.png')} style={styles.itemIcon}/>
                        <Text style={styles.itemText}> Brew House No.16</Text>
                        <Text style={styles.itemDistance} ellipsizeMode='tail' numberOfLines={1}>(2.9 miles from you)</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

class List extends PureComponent {

    _keyExtractor = (item, index) => item.id;

    _onItemPress = (id) => {
        Toast.info(id, 1)
    };

    _renderItem = ({item}) => (
        <ListItem
            id={item.id}
            onPressItem={this._onItemPress}
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

    searchbar: {
        flexDirection: 'row',
        backgroundColor: Color.Teal,
        alignItems: 'center',
        height: 72,

    },
    leftbox: {
        paddingHorizontal: 8
    },
    leftIcon: {
        width: 40,
        height: 40,
    },
    rightBox: {
        height: 50,
        flex: 1,
        marginRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.white,
    },
    icon: {
        width: 30,
        height: 30,
        marginHorizontal: 8,
    },
    input: {
        flex: 1,
    },
    itemContainer: {
        width: '100%'
    },
    itemImage: {
        width: '100%',
        height: Dimension.homeImage
    },
    itemContent: {
        width: '100%',
        paddingHorizontal: 40,
        marginVertical: 10,
    },
    itemTextContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: Color.black,
        marginBottom:5
    },
    itemIcon: {
        width: 20,
        height: 20
    },
    itemText: {
        marginLeft: 5,
        fontSize:14
    },
    itemDistance: {
        flex:1,
        fontSize: 12,
        textAlign: 'center',
        justifyContent:'center',
        alignItems:'center'
    }

});
import React ,{ PureComponent} from 'react'
import BaseScreen from "./BaseScreen";
import {
    View, StyleSheet, FlatList, TouchableOpacity, Image, Text, RefreshControl
} from 'react-native'
import {connect} from "react-redux";
import Color from '../style/Color'
import {Toast} from "antd-mobile";
import NavigationActions from "react-navigation/src/NavigationActions";


@connect()
export default class MessagesScreen extends BaseScreen {

    componentWillMount(){
        let data = [];
        for (let i = 0; i < 10; i++) {
            let item = {
                id: `item${i}`
            };
            data.push(item)
        }
        this.setState({data: data,refreshing:false,canLoadmore:true,loading:false})
    }

    static defaultProps = {
        title: 'MESSAGES'
    };

    showLeft() {
        return true
    }

    showRight() {
        return true
    }

    rightPress() {
        Toast.info('more', 1)
    }

    rightIcon() {
        return {
            name: 'ellipsis-h', color: Color.white, size: 25
        }
    }

    onItemPress = (id) => {
      this.props.dispatch(NavigationActions.navigate({routeName:'Chat',params:id}))
    };

    _renderItem = ({item}) => {
        return(
            <Item
                id = {item.id}
                onItemPress={this.onItemPress}
            />
        )
    };

    _keyExtractor = (data,index) => {
      return data.id
    };

    renderContent() {
        return (
            <FlatList
                data={this.state.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                style={styles.content}
                ListFooterComponent={this.renderListFooter}
                enableEmptySections={true}
                onEndReachedThreshold={0.1}
                onEndReached={this.loadmore}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.refresh}
                        title='loading...'
                    />
                }
            />
        )
    }


    renderListFooter = () =>{
        if (this.state.data.length > 0 && this.state.canLoadmore) {
            return (
                <View style={{
                    height: 44,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>{'正在加载....'}</Text>
                </View>
            )
        } else if (!this.state.canLoadmore) {
            return (
                <View style={{
                    height: 44,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>{'暂无更多'}</Text>
                </View>
            )
        } else {
            return null
        }

    };

    randomId = () =>{
      return Math.floor((Math.random() * 10000))+""
    };

    loadmore = () =>{

        setTimeout(()=>{
            id = this.randomId();
            this.setState({data:[...this.state.data,{id:id}]})
        },2000);

    };

    refresh = () =>{
        this.setState({refreshing:true});
        setTimeout(() =>{
            let data = [];
            for (let i = 0; i < 10; i++) {
                let id = this.randomId();
                let item = {
                    id: id
                };
                data.push(item)
            }
            this.setState({data:data,refreshing:false})
        },2000);

    }

}

class Item extends PureComponent{

    _onPress = () => {
      this.props.onItemPress(this.props.id)
    };

    render(){
        return(
            <TouchableOpacity
                onPress={this._onPress}
                style={styles.item}
            >
                <Image style={styles.avatar} source={require('../images/jobs.jpeg')}/>
                <View style={styles.info}>
                    <Text style={styles.userName}>JOBS</Text>
                    <Text style={styles.message}>I'm so excited for the event tonight!</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1
    },
    item:{
        flexDirection:'row',
    },
    avatar:{
        width:72,
        height:72,
        margin:10,
        borderRadius:36,
        borderColor:Color.gray,
        borderWidth:1
    },
    info:{
        borderColor:Color.gray,
        borderBottomWidth:1,
        flex:1,
        justifyContent:'center'
    },
    userName:{
        fontSize:16,
        color:Color.darkgray,
        marginBottom:10,

    },
    message:{
      color:Color.gray,
      fontSize:10
    },

});
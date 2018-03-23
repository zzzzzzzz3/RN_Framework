import React, {PureComponent} from 'react'
import BaseScreen from "./BaseScreen";
import {
    View, StyleSheet, Image, Text, FlatList, TextInput, TouchableOpacity
} from 'react-native'
import {connect} from "react-redux";
import Dimension from "../style/Dimension";
import Color from "../style/Color";
import BaseStyle from "../style/BaseStyles";
import {Toast} from "antd-mobile";


@connect()
export default class ChatScreen extends BaseScreen {

    componentDidMount() {

        this.setState({data: ChatScreen.genData()})
    }

    static genData() {
        let data = [];
        for (let i = 0; i < 10; i++) {
            let item = {
                id: `item${i}`,
                isSend: i % 2 === 0
            };
            data.push(item)
        }
        return data
    }

    static defaultProps = {
        title: 'BOB'
    };

    showLeft() {
        return true
    }

    showRight() {
        return false
    }

    renderTitle() {
        return (
            <View style={styles.userTitle}>
                <Image source={require('../images/jobs.jpeg')} style={styles.titleAvatar}/>
                <Text style={styles.titleText}>{this.props.navigation.state.params}</Text>
            </View>
        )
    }

    _renderItem = ({item}) => {
        console.log('item=========', item);
        return (
            <Message
                isSend={item.isSend}
            />
        )
    };

    _KeyExtractor = (item, index) => {
        return item.id
    };

    onTextChange = (text) => {
        this.setState({sendMessage: text})
    };

    sendMessage = () => {
        Toast.info(this.state.sendMessage, 1);
        this.setState({sendMessage: ""})
    };

    renderContent() {
        return (
            <View style={BaseStyle.container}>
                <FlatList
                    data={this.state.data}
                    extraData={this.state}
                    renderItem={this._renderItem}
                    keyExtractor={this._KeyExtractor}
                    style={BaseStyle.container}
                />

                <View style={styles.sendBox}>
                    <TextInput
                        value={this.state.sendMessage}
                        style={styles.input}
                        placeholder='Type a Message...'
                        placeholderTextColor={Color.gray}
                        numberOfLines={1}
                        onChangeText={this.onTextChange}
                    />
                    <TouchableOpacity
                        style={styles.sendButton}
                        onPress={this.sendMessage}
                    >
                        <Text style={styles.sendButtonText}>SEND</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

class Message extends PureComponent {

    render() {

        //发送的消息
        if (this.props.isSend) {
            return (
                <View style={styles.msgContent}>
                    <Text style={styles.time}>Jan 11,2017,11:14 PM</Text>
                    <View style={styles.sendMsgContent}>
                        <View style={{backgroundColor: Color.Teal, borderRadius: 5, marginRight: 10}}>
                            <Text style={styles.sendText}>Hey man</Text>
                        </View>
                    </View>
                </View>
            )
        }
        //接收的消息
        return (
            <View style={styles.msgContent}>
                <Text style={styles.time}>Jan 11,2017,11:14 PM</Text>
                <View style={styles.getMsgContent}>
                    <Image source={require('../images/jobs.jpeg')} style={styles.msgAvatar}/>


                    <View style={{
                        backgroundColor: Color.LavenderGray, borderRadius: 5, marginTop: 5
                    }}>
                        <Text style={styles.getMsgText}>Hey there,Carolyn!How are you?</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleAvatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderColor: Color.LavenderGray,
        borderWidth: 1
    },
    titleText: {
        fontSize: Dimension.titleSize,
        fontWeight: 'bold',
        color: Color.white,
    },
    msgContent: {
        width: '100%',
        marginBottom: 10
    },
    time: {
        alignSelf: 'center',
        marginVertical: 15,
        fontSize: 10,
        color: Color.gray
    },
    msgAvatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginHorizontal: 8,
        borderColor: Color.LavenderGray,
        borderWidth: 1
    },
    getMsgText: {
        fontSize: 14,
        color: Color.black,
        padding: 10,
    },
    getMsgContent: {
        flexDirection: 'row',
        paddingRight: 50,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    sendMsgContent: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingLeft: 90
    },
    sendText: {
        fontSize: 14,
        color: Color.white,
        padding: 10,
    },
    sendBox: {
        width: '100%',
        height: 64,
        borderColor: Color.gray,
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    sendButton: {
        paddingHorizontal: 20,
        height: '100%',
        justifyContent: 'center'
    },
    sendButtonText: {
        fontSize: 16,
        color: Color.BabyBlue
    },
    input: {
        fontSize: 16,
        color: Color.gray,
        flex: 1,
        paddingLeft: 30
    }
});
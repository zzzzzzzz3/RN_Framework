import React, {PureComponent} from 'react'
import {TouchableOpacity, View, StyleSheet, Text} from "react-native";
import Color from "../style/Color";
import PropTypes from 'prop-types';

/**
 * 拥有双层背景的按钮
 * */
export default class DoubleButton extends PureComponent {

    static defaultProps = {
        //第一层背景色
        frontColor: '#aa0000',
        //底层背景色
        backColor: '#ff0000',
        //圆角
        radius: 0,
        //点击事件
        onPress: () => {
        },
    };

    _onPress = () => {
        this.props.onPress()
    };

    renderContent(){
        if(this.props.title){
            return(
                <View style={styles.content}>
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
            )
        }else {
            return this.props.content
        }
    }

    render() {
        const radius = this.props.radius;
        const frontColor = this.props.frontColor;
        const backColor = this.props.backColor;

        return (
            <TouchableOpacity
                onPress={this._onPress}
                style={this.props.style}
            >
                <View style={[{borderRadius: radius, backgroundColor: backColor}, styles.back]}/>
                <View style={[{borderRadius: radius, backgroundColor: frontColor}, styles.front]}>
                    {
                        //按钮内的布局
                        this.renderContent()
                    }
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    back: {
        position: 'absolute',
        top: 3,
        left: 0,
        right: 0,
        bottom: 0,
    },
    front: {
        position: 'absolute',
        top: 0,
        left: 3,
        right: 3,
        bottom: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: Color.white,
    },
    content:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
});

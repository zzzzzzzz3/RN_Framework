import React, {PureComponent} from 'react'
import {
    StyleSheet,
    View,
    Text, TouchableOpacity,
} from 'react-native'

import Color from '../style/Color'
import Dimension from '../style/Dimension'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'

const propsType = {
    onLeftPress: PropTypes.fun,
    onRightPress: PropTypes.fun,
    title:PropTypes.string,
    showLeft:PropTypes.bool,
    showRight:PropTypes.bool,
    rightIcon:PropTypes.object,
    titleContent:PropTypes.object,
};

export default class NavigationBar extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                {/* 导航左按钮 */}
                {this.renderLeftItem()}
                {/* 导航title */}
                {this.renderTitle()}
                {/* 导航右按钮*/}
                {this.renderRightItem()}
            </View>
        )
    }

    renderLeftItem() {
        if (!this.props.showLeft) {
            return null
        }
        return (
            <TouchableOpacity
                style={styles.left}
                onPress={this.props.onLeftPress}
            >
                <Icon name={this.props.leftIcon.name} size={this.props.leftIcon.size} color={this.props.leftIcon.color}/>
            </TouchableOpacity>
        )
    }

    renderTitle() {
        if(this.props.titleContent){
            return(
                <View style={styles.center}>
                    {this.props.titleContent}
                </View>
            )
        }
        return (
            <View style={styles.center}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }

    renderRightItem() {
        if (!this.props.showRight) {
            return null
        }

        return (
            <TouchableOpacity
                style={styles.right}
                onPress={this.props.onRightPress}
            >
                <Icon name={this.props.rightIcon.name} size={this.props.rightIcon.size} color={this.props.rightIcon.color}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        height: 72,
        backgroundColor: Color.Teal,
        alignItems: 'center',
        // borderBottomWidth: 1,
        // justifyContent: 'space-between',
        // borderBottomColor: Color.borderColor,
    },
    left: {
        position:'absolute',
        left:20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    center: {
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize: Dimension.titleSize,
        color: Color.white,
        fontWeight: 'bold'
    },
    right: {
        position:'absolute',
        right:20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
});
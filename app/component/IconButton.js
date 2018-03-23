import React, {Component} from 'react'
import DoubleButton from "./DoubleButton";
import BaseStyle from "../style/BaseStyles";
import Color from "../style/Color";
import {Text, View, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class IconButton extends Component {

    static defaultProps = {
        frontColor: Color.white,
        backColor: Color.BabyBlue,
        radius: 10,
        iconColor: Color.red,
        textColor: Color.red,
        title:'button',
        onPress: () => {
        }
    };


    renderContent() {
        return (
            <View style={styles.buttonContent}>
                <Icon name={this.props.iconName} color={this.props.iconColor} size={16} style={{marginHorizontal: 20}}/>
                <Text style={[styles.buttonText,{color:this.props.textColor}]}>{this.props.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <DoubleButton
                style={[BaseStyle.buttonL, this.props.style]}
                frontColor={this.props.frontColor}
                backColor={this.props.backColor}
                onPress={this.props.onPress}
                radius={this.props.radius}
                content={this.renderContent()}
            />
        )
    }
}

const styles = StyleSheet.create({
    buttonContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    buttonText: {
        fontSize: 14,
        color: Color.red
    }
});
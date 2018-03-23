import React from 'react'
import BaseScreen from "./BaseScreen";
import {
    View, StyleSheet, TouchableOpacity, Text, ScrollView
} from 'react-native'
import {connect} from "react-redux";
import BaseStyle from "../style/BaseStyles";
import Video from "react-native-video";
import Icon from "react-native-vector-icons/FontAwesome";
import Color from '../style/Color'
import {Progress} from 'antd-mobile'


@connect()
export default class HowMixoloScreen extends BaseScreen {

    static defaultProps = {
        title: 'HOW MIXOLO WORKS'
    };

    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            isPlay: false,
        };

    }


    loadStart = () => {
        console.log('视频开始加载');
    };

    onLoad = (data) => {
        this.setState({duration:data.duration})

    };

    onProgress = (data) => {
        this.setState({currentTime: data.currentTime*100/this.state.duration});
    };

    onEnd = () => {
        console.log('视频播放完成');

    };

    videoError = () => {
        console.log('视频播放出错');

    };

    showLeft() {
        return true
    }

    showRight() {
        return false
    }

    pauseOrPlayVideo = () => {
        this.setState((previous) => {
            return {...previous, isPlay: !this.state.isPlay}
        })
    };


    renderContent() {
        return (
            <View style={styles.container}>
                <View style={styles.videoBox}>
                    <Video
                        source={require('../assets/background.mp4')} // 视频的URL地址，或者本地地址，都可以.
                        ref='player'
                        rate={this.state.isPlay ? 1 : 0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
                        volume={1}                 // 声音的放声音的放大倍数大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
                        muted={false}                // true代表静音，默认为false.
                        paused={false}               // true代表暂停，默认为false
                        resizeMode="stretch"           // 视频的自适应伸缩铺放行为，contain、stretch、cover
                        repeat={false}                // 是否重复播放
                        playInBackground={true}     // 当app转到后台运行的时候，播放是否暂停
                        playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
                        onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
                        onLoad={this.onLoad}    // 当视频加载完毕时的回调函数
                        onProgress={this.onProgress}    //  进度控制，每250ms调用一次，以获取视频播放的进度
                        onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
                        onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
                        style={styles.video}
                        poster="https://baconmockup.com/300/200/"
                    />
                    <View style={styles.controlBar}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.pauseOrPlayVideo}
                        >
                            <Icon name={this.state.isPlay?'pause':'play'} size={16} color={Color.white}/>
                        </TouchableOpacity>
                        <Progress style={{flex:1,width:5}} percent={this.state.currentTime} position="normal"/>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Icon name='volume-up' size={16} color={Color.white}/>
                        </TouchableOpacity>

                    </View>
                </View>

                <ScrollView style={styles.content}>
                    <View style={styles.descItem}>
                        <Text style={styles.title}>WHAT</Text>
                        <Text style={styles.text}>We want yout to be part of our beautiful social experiment.Join us in building a community of co-active aolo adults,regardless of their relationship status,who want to expand and diversify their...</Text>
                    </View>
                    <View style={styles.descItem}>
                        <Text style={styles.title}>WHY</Text>
                        <Text style={styles.text}>We want yout to be part of our beautiful social experiment.Join us in building a community of co-active aolo adults,regardless of their relationship status,who want to expand and diversify their...</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    videoBox: {
        width: '100%',
        height: 200,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    controlBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
    },
    button: {
        padding:8
    },
    content:{
        padding:20
    },
    descItem:{
        borderColor:Color.gray,
        borderBottomWidth:1,
        paddingBottom:8,
        marginTop:10
    },
    title:{
        paddingLeft:3,
        fontSize:16,
        color:Color.darkgray,
        marginBottom:10,
    },
    text:{
        paddingLeft:30,
        fontSize:12,
        color:Color.gray,
        width:'100%',
        lineHeight:16
    }
});

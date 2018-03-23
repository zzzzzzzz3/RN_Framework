import {StyleSheet} from "react-native";
import Dimension from "./Dimension";
import Color from "./Color";


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.Teal,
        paddingVertical:'20%'
    },
    title: {
        fontSize: Dimension.titleSize,
        color: Color.white,
        fontWeight: 'bold',
        marginBottom: 40
    },
    bottomText: {
        fontSize: 12,
        color: Color.white,
        marginTop: 10
    },
    input: {
        fontSize: 14,
        fontWeight: '500',
        color: Color.darkgray,
        flex: 1,
        paddingHorizontal: 30
    },
    button:{
        marginTop: 10,
        width: 270,
        height: 60
    }
});
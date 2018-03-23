import {StyleSheet} from "react-native";
import Color from "./Color";


export default styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.Teal
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom: {
        marginBottom: 15,
        alignSelf:'center'
    },
    input: {
        fontSize: 14,
        fontWeight: '500',
        color: Color.darkgray,
        flex: 1,
        paddingHorizontal: 30,
        alignSelf:'center'
    },
    button: {
        width: 270,
        height: 60,
        marginTop: 10
    },
    labelButton: {
        width: 200,
        height: 50,
    },
    logo: {
        fontSize: 80,
        fontWeight: '800',
        marginTop: '20%',
        color: Color.white
    },
    labelBtnText: {
        fontSize: 22,
        fontWeight: '500',
        color: Color.white
    },
    forgot: {
        marginVertical: 15,
        alignSelf: 'flex-end',
    },
    buttonContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    signIn: {
        fontSize: 16,
        color: Color.white,
        alignSelf:'center'
    },
    buttonText: {
        fontSize: 14,
        color: Color.red
    }
});
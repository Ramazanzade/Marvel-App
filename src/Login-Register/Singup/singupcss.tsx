import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    view: {
        backgroundColor: 'black',
        flex: 1
    },
    input: {
        backgroundColor: '#FFFFFF',
        height: 60,
        width: '90%',
        marginLeft: '5%',
        textAlign: 'left',
        paddingLeft: 30,
    },
    img: {
        width: 600,
        height: 300,
    },
    imgview: {
        alignSelf: 'center',
        marginTop: '-20%',
        marginBottom: '15%'
    },
    touc: {
        height: 60,
        borderWidth: 2,
        borderColor: '#ED1B24',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginLeft: '5%',
        marginTop: '10%'


    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FFFFFF'
    },
    text2: {
        color: 'gray',
        fontSize: 20
    },
    text1: {
        color: '#FFFFFF',
        fontSize: 25,
        marginTop: '5%'
    },
    textbig: {
        alignItems: 'center',
        marginTop: '5%'
    },
    touchview: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '8%'
    },
    toucicon: {
        backgroundColor: '#FFFFFF',
        width: 135,
        height: 60,
        flexDirection: 'row',

    },
    text3: {
        textAlign: 'center',
        marginTop: '15%',
        fontWeight: '700',
        color: 'black',
        fontSize: 15,

    },
    icon: {
        marginTop: '5%',
        margin: 5,
        color: '#0163E0',
    },
    icon1: {
        marginTop: '5%',
        margin: 5,
        color: '#EB4335',

    },
    text4: {
        color: 'gray',
        marginRight: 10,
        fontSize: 15
    },
    text5: {
        color: 'red',
        fontSize: 17
    },
    fouter: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '10%'
    },
    icon2:{
        // color:'#FFFFFF'
        color:'gray'
    },
    toggle:{
        position:'absolute',
        zIndex:200,
        marginLeft:'85%',
        marginTop:'5%'
    }

})
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    img: {
        width: '100%',

    },
    text: {
        fontSize: 30,
        color: '#FFFFFF'
    },
    view: {
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 203,
        marginTop: '10%'
    },
    view2: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'red',
        // position: 'absolute',
        // zIndex: 204,
        alignSelf: 'center',
        marginBottom:'25%'
        
    },
    icon: {
        alignSelf: 'center',
        marginTop: '10%'
    },
    view3: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    text1: {
        fontSize: 25,
        fontWeight: '700',
        color: '#FFFFFF'
    },
    text2: {
        fontSize: 20,
        fontWeight: '400',
        color: '#FFFFFF'
    },
    touc1: {
        borderWidth: 3,
        borderColor: 'red',
        padding: 8, 
        margin:'5%'


    },
    touc2: {
marginTop:'8%',

    },
    view4:{
        position:'absolute',
        zIndex:210,
        // alignSelf:'center',
        flexDirection:'column',
        marginTop:'85%'
    }

})
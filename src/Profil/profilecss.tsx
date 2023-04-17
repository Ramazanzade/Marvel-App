import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    imgview: {
        alignSelf: 'center'
    },
    img: {
        width: 500,
        height: 250,
        marginTop: '-30%'
    },
    textview: {
        alignSelf: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 30
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: 'gray',
        alignSelf:'center', 
        },
    avatarview: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '2%'
    },
    buton: {
        marginTop: '10%'
    },
    touc: {
        borderWidth: 2,
        borderColor: 'red',
        width: '70%',
        alignSelf: 'center',
        padding: '3%'
    },
    text5: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 20
    },
    selectedAvatar: {
        borderColor: 'gray',
        width: 120,
        height: 125,
        borderRadius: 60,
        borderBottomWidth: 5,
        borderRightWidth: 5,
    },
    avatarsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    avatart1: {
        width: 157,
        height: 157,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: 'gray',
        alignSelf: 'center',
        marginTop: '10%'
    },
    textimput: {
        width: '80%',
        height: 70,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginLeft: '10%',
        marginTop: '5%',
        textAlign: 'left',
        paddingLeft: 20,
        color: '#FFFFFF'

    },
    change: {
        color: 'red',
        fontSize: 20
    },
    changeview: {
        marginLeft: '65%',
        marginTop: '-5%',
    },
    username: {
        color: 'gray',
        fontSize: 30
    },
    usernameview: {
        alignSelf: 'center',
        marginTop: '5%'
    },
    inputview: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 40
    },
    input: {
        width: 40,
        height: 50,
        borderRadius: 15,
        textAlign: 'left',
        paddingLeft: 20,
        color: '#FFFFFF',
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    textview1: {
        alignSelf: 'center',
        marginHorizontal: '20%',
        marginTop: '5%'
    },
    text1: {
        color: 'gray',
        fontSize: 20
    },
    usernameview1: {
        alignSelf: 'center',
        marginTop: '15%'
    },
    username1: {
        color: 'gray',
        fontSize: 35
    },
    avatartview:{
       
        borderRadius: 70,
        alignSelf:'center',
        marginTop:'10%',
    },

})
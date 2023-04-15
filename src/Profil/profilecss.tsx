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
        height: 300,
        marginTop: '-30%'
    },
    textview: {
        alignSelf: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 30
    },
    avatar:{
        width:150,
        height:150,
        borderRadius:80,
        borderWidth:3,
        borderColor:'gray',
    },
    avatarview:{
       flexDirection:'row',
       justifyContent:'space-around'
    }
})
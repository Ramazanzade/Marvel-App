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
    avatar:{
        width:120,
        height:120,
        borderRadius:70,
        borderWidth:1,
        borderColor:'gray',
    },
    avatarview:{
       flexDirection:'row',
       justifyContent:'space-evenly',
       marginTop:'2%'
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
        borderColor: 'red',
        width:120,
        height:125,
        borderRadius:60,
        borderBottomWidth:10,
        borderRightWidth:10,
      },
      avatarsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 20,
      },
      
})
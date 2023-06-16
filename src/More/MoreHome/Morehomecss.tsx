import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    view: {
        backgroundColor: 'black',
        flex: 1
    },
    view1: {
        marginHorizontal: "7%",    
    },
    touc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:'5%'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 20
    },
    icon: {
        color: '#FFFFFF',
        position:'absolute',
        zIndex:12,
        alignSelf:'center',
        marginTop:'13%',
    },
    icon1: {
        color: '#FFFFFF',
        alignSelf:'center',
    },
    line:{
        height:2,
        backgroundColor:'#FFFFFF',
        borderRadius:50,
        marginBottom:15
    },
    accountview:{
        backgroundColor: 'black',
        flex: 1
    },
    iconview:{
        width:150,
        height:150,
        borderRadius:100,
        backgroundColor:'rgba(200, 199, 199, 0.1)',
        position:'relative',
        marginTop:'100%',
        alignSelf:'center',        
    },
    icontext:{
        color:'rgba(255, 255, 255, 0.3)',
        fontSize:25,
        alignSelf:'center',
        marginTop:'5%'
    }
})
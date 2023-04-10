import { StyleSheet } from 'react-native'
const colors = { primary: '#282534', white: '#ffff' }
export default StyleSheet.create({
  imgeview: {
    alignItems: 'center'
  },
  imge: {
    height: '5%',
    resizeMode: 'contain',
    width:'50%'

  },
  title: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center'
  },
  subtitle: {
    color: colors.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23
  },
  view: {
    flex: 1,
    backgroundColor: '#1E1E1E'
  },
  statusbar: {
    backgroundColor: '#1E1E1E'
  },
  image: {
    height: '50%',
    width: '50%',
    resizeMode: 'contain',
  },
  indicator: {
    width: 15,
    height:15,
     borderRadius:10,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 3,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 9,
    backgroundColor: '#ED1B24',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip: {
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.white,
  }
})
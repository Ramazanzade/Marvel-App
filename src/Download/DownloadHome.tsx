import { View, Text , Image } from 'react-native'
import React from 'react'
import downloadcss from './downloadcss'
import Tabbartop from '../navigation/Tab/Tabbartop'

const DownloadHome = () => {
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
<View style={downloadcss.imgview}>
<Image
style={downloadcss.img}
  source={require('../asset/imge/2.png')}
/>
</View>
<Tabbartop></Tabbartop>
    </View>
    
  )
}

export default DownloadHome
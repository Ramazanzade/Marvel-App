import { View, Text , Image } from 'react-native'
import React from 'react'
import downloadcss from './downloadcss'
import TabbartopDownload from '../navigation/Tab/TabbartopDownload'

const DownloadHome = () => {
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
<View style={downloadcss.imgview}>
<Image
style={downloadcss.img}
  source={require('../asset/imge/2.png')}
/>
</View>
<TabbartopDownload></TabbartopDownload>
    </View>
    
  )
}

export default DownloadHome
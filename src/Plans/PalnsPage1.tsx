import { View, Text } from 'react-native'
import React from 'react'
import planscss from './planscss'

const PalnsPage1 = () => {
  return (
    <View style={planscss.view}>
<View style={planscss.umumi}>
    <View style={planscss.cevre}><Text style={planscss.text}>1</Text></View>
    <View style={planscss.xet}></View>
    <View style={planscss.cevre}><Text  style={planscss.text}>2</Text></View>
    <View style={planscss.xet}></View>
    <View style={planscss.cevre}><Text  style={planscss.text}>3</Text></View>
</View>
<View style={planscss.xet1}></View>







    </View>
  )
}

export default PalnsPage1
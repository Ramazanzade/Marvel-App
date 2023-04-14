import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import planscss from './planscss'

const PlansPage2 = ({navigation}:any) => {
    const [backgroundColors, setBackgroundColors] = useState(['', '' , ' ']);
    const [cevreColor, setCevreColor] = useState('#700806');

    const handleTouch = (index: any) => {
        const updatedBackgroundColors = backgroundColors.map((color, i) => {
            if (i === index) {
              return 'red';
            } else {
              return 'black';
            }
          });
        setBackgroundColors(updatedBackgroundColors);
        setCevreColor('red');

    };
    return (
        <View style={planscss.view}>
            <View style={planscss.umumi}>
                <TouchableOpacity style={[planscss.cevre, { backgroundColor: 'red' }]}>
                    <Text style={planscss.text}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[planscss.xet , { backgroundColor: 'red' }]}  onPress={() => handleTouch(0)}></TouchableOpacity>
                <TouchableOpacity style={[planscss.cevre, { backgroundColor: 'red' }]} onPress={() => handleTouch(1)}>
                    <Text style={planscss.text}>2</Text>
                </TouchableOpacity>
                <View style={[planscss.xet , { backgroundColor: cevreColor }]}></View>
                <TouchableOpacity style={planscss.cevre} onPress={() => handleTouch(2)}>
                    <Text style={planscss.text}>3</Text>
                </TouchableOpacity>            
                </View>
            <View style={planscss.xet1}></View>
            <View style={planscss.imgview}>
                <Image
                    style={planscss.img}
                    source={require('../asset/imge/2.png')}
                />
            </View>
            <View style={planscss.textview}>
                <Text style={planscss.text1}>Choose how to pay</Text>
            </View>
            <View style={[planscss.viewseri, {marginTop:'10%'}]}>
                <TouchableOpacity style={[planscss.textview1, { backgroundColor: backgroundColors[0] }]} onPress={() => handleTouch(0)}>
                    <Text style={planscss.text6}>Credit / Debit Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[planscss.textview1, { backgroundColor: backgroundColors[1] }]} onPress={() => handleTouch(1)}>
                    <Text style={planscss.text7}>Netbanking</Text>
                </TouchableOpacity>
                <View style={planscss.touch}>
                    <Text style={planscss.text8}>Movies & Series $20/month </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('PalnsPage1')}>
                    <Text style={planscss.text9}>Change</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={planscss.buton}>
                <TouchableOpacity style={[planscss.touc,{marginTop:"20%"}]} onPress={()=>navigation.navigate('PlansPage3')}>
                    <Text style={planscss.text5}> Continue </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default PlansPage2
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import planscss from './planscss'

const PalnsPage1 = ({navigation}:any) => {
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
                <TouchableOpacity style={[planscss.xet , { backgroundColor: cevreColor }]}  onPress={() => handleTouch(0)}></TouchableOpacity>
                <TouchableOpacity style={planscss.cevre} onPress={() => handleTouch(1)}>
                    <Text style={planscss.text}>2</Text>
                </TouchableOpacity>
                <View style={planscss.xet}></View>
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
                <Text style={planscss.text1}>Choose your Plan</Text>
                <Text style={planscss.text2}>Cancel at any time</Text>
            </View>
            <View style={planscss.viewseri}>
                <TouchableOpacity style={[planscss.textview1, { backgroundColor: backgroundColors[0] }]} onPress={() => handleTouch(0)}>
                    <Text style={planscss.text3}>Movies & Series</Text>
                    <Text style={planscss.text4}>$20/mth</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[planscss.textview1, { backgroundColor: backgroundColors[1] }]} onPress={() => handleTouch(1)}>
                    <Text style={planscss.text3}>Movies</Text>
                    <Text style={planscss.text4}>$20/mth</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[planscss.textview1, { backgroundColor: backgroundColors[2] }]} onPress={() => handleTouch(2)}>
                    <Text style={planscss.text3}>Series</Text>
                    <Text style={planscss.text4}>$20/mth</Text>
                </TouchableOpacity>
            </View>
            <View style={planscss.buton}>
                <TouchableOpacity style={planscss.touc} onPress={()=>navigation.navigate('PlansPage2') }>
                    <Text style={planscss.text5}> Continue </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default PalnsPage1
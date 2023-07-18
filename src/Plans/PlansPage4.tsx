import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import planscss from './planscss'
const DEFAULT_DELAY = 100;
const DEFAULT_DELAY1 = 5000;

const PlansPage4 = ({ navigation }: any) => {
  const [backgroundColors, setBackgroundColors] = useState(['', '', ' ']);
  const [cevreColor, setCevreColor] = useState('#700806');
  const [loading , setLoading] = useState(false)

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

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 6);
    }, DEFAULT_DELAY);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('PlansPage5');
    }, DEFAULT_DELAY1);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

 
  return (
    <View style={planscss.view}>
      <View style={planscss.umumi}>
        <TouchableOpacity style={[planscss.cevre, { backgroundColor: 'red' }]}>
          <Text style={planscss.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[planscss.xet, { backgroundColor: 'red' }]} onPress={() => handleTouch(0)}></TouchableOpacity>
        <TouchableOpacity style={[planscss.cevre, { backgroundColor: 'red' }]} onPress={() => handleTouch(1)}>
          <Text style={planscss.text}>2</Text>
        </TouchableOpacity>
        <View style={[planscss.xet, { backgroundColor: 'red' }]}></View>
        <TouchableOpacity style={[planscss.cevre, { backgroundColor: 'red' }]} onPress={() => handleTouch(2)}>
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
        <Text style={[planscss.text1, { fontSize: 30, marginHorizontal: '20%' }]}>Verifying Payment</Text>
        <Text style={[planscss.text1, { fontSize: 20, marginHorizontal: '5%', marginTop: '15%' }]}>Please wait while we verify your payment from the bank...</Text>
      </View>
        <View style={planscss.loadingview}>
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <View
          key={index}
          style={[
            planscss.loading,
            {
              backgroundColor: currentIndex === index ? 'red' : '#FFFFFF',
              marginTop:currentIndex === index ? '-5%' : '0%'
            },
          ]}
        />
      ))}
    </View>
    </View >
  )
}

export default PlansPage4
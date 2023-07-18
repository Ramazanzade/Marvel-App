import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import planscss from './planscss'
import axios from 'axios'

const PalnsPage1 = ({ navigation }: any) => {
  const [backgroundColors, setBackgroundColors] = useState(['', '', '']);
  const [cevreColor, setCevreColor] = useState('#700806');
  const [products, setProducts] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const getProducts = async () => {
    try {
      const response = await axios.get(`https://marvel-backend2.onrender.com/api/plans/`);
      console.log('data');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      console.log('catch');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleTouch = (index: number) => {
    const updatedBackgroundColors = backgroundColors.map((_, i) => {
      return i === index ? 'red' : 'black';
    });

    setBackgroundColors(updatedBackgroundColors);
    setSelectedItemIndex(index);
  };

  const renderItem = ({ item, index }: any) => {
    return (
      <View style={planscss.viewseri}>
        <TouchableOpacity style={[planscss.textview1, { backgroundColor: backgroundColors[index] }]} onPress={() => handleTouch(index)}>
          <Text style={planscss.text3}>{item.text}</Text>
          <Text style={planscss.text4}>{item.amount}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const isContinueButtonDisabled = selectedItemIndex === -1;

  return (
    <View style={planscss.view}>
      <View style={planscss.umumi}>
        <TouchableOpacity style={[planscss.cevre, { backgroundColor: 'red' }]}>
          <Text style={planscss.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[planscss.xet, { backgroundColor: cevreColor }]} onPress={() => handleTouch(0)}></TouchableOpacity>
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
      <FlatList
        data={products}
        renderItem={renderItem}
      />
      <View style={planscss.buton}>
        <TouchableOpacity style={[planscss.touc, { opacity: isContinueButtonDisabled ? 0.5 : 1 }]} disabled={isContinueButtonDisabled} onPress={() => navigation.navigate('PlansPage2')}>
          <Text style={planscss.text5}> Continue </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PalnsPage1

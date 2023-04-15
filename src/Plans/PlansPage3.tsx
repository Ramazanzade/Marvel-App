import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import planscss from './planscss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const PlansPage3 = ({ navigation }: any) => {
  const [backgroundColors, setBackgroundColors] = useState(['', '', ' ']);
  const [cevreColor, setCevreColor] = useState('#700806');
  const [name, setname] = useState('')
  const [surname, setsurname] = useState('')
  const [cart, setcart] = useState('')
  const [date, setdate] = useState('')
  const [security, setsecurity] = useState('')
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
        <Text style={[planscss.text1,{fontSize:20, marginHorizontal:'10%'}]}>Fill your Credit / Debit Card Details</Text>
      </View>
      <TextInput
        style={planscss.textimput}
        onChangeText={setname}
        value={name}
        placeholder="First Name"
        placeholderTextColor="gray"
      />
      <TextInput
        style={planscss.textimput}
        onChangeText={setsurname}
        value={surname}
        placeholder="Last Name"
        placeholderTextColor="gray"
      />
      <TextInput
        style={planscss.textimput}
        onChangeText={setcart}
        value={cart}
        placeholder="Card Number"
        placeholderTextColor="gray"
      />
      <TextInput
        style={planscss.textimput}
        onChangeText={setdate}
        value={date}
        placeholder="Expiration Date (MM/YY)"
        placeholderTextColor="gray"
      />

      <TextInput
        style={planscss.textimput}
        onChangeText={setsecurity}
        value={security}
        placeholder="Security Code (CVV)"
        placeholderTextColor="gray"
      />
      <View style={[planscss.touch, { marginTop: '7%' }]}>
        <Text style={planscss.text8}>Movies & Series $20/month </Text>
        <TouchableOpacity onPress={() => navigation.navigate('PalnsPage1')}>
          <Text style={planscss.text9}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={planscss.buton}>
        <TouchableOpacity style={[planscss.touc, { marginTop: "1%" }]} onPress={() => navigation.navigate('PlansPage4')}>
          <Text style={planscss.text5}> Continue </Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}

export default PlansPage3
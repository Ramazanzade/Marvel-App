import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import planscss from './planscss'
import axios from 'axios'; 

const PlansPage3 = ({ navigation }:any) => {
  const [backgroundColors, setBackgroundColors] = useState(['', '', ' ']);
  const [cevreColor, setCevreColor] = useState('#700806');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cart, setCart] = useState('');
  const [date, setDate] = useState('');
  const [security, setSecurity] = useState('');
  const [amount, setAmount] = useState('');
  const [error , seterror] = useState('')

  const handleTouch = (index:any) => {
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

  const handlePayment = async () => {
    try {
      const response = await axios.post('https://marvel-backend2.onrender.com/api/pay', {
        name,
        surname,
        cart,
        date,
        security,
        amount
      });

      const { clientSecret } = response.data;
      console.log(response.data)
      if (name.trim() === '' || surname.trim() === ''  || cart.trim() === '' || date.trim() === '' || security.trim() === ''  || amount.trim() === '') {
        seterror('Please enter your name and surname');
        return;
      }else{
              navigation.navigate('PlansPage4');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };
 const handlecartlengt =(number:any)=>{
 if(number.length <=16){
  setCart(number)
 }

 }
 const cardNumberError = cart.length !==16 ? planscss.errorInput : null;

 const handlesecuritylengt =(number:any)=>{
  if(number.length <=3){
   setSecurity(number)
  }
 
  }
  const securityerror = security.length !== 3? planscss.errorInput : null;
  const emptyInputError = error !== '' ? planscss.errorInput : null;

  const handleDateChange = (number: string) => {
    const formattedDate = number.replace(/\D/g, ''); // Remove all non-digit characters
    const month: string = formattedDate.slice(0, 2);
    const year: string = formattedDate.slice(2, 6);
  
    if (formattedDate.length <= 6 && /^\d{0,2}$/.test(month) && /^\d{0,4}$/.test(year)) {
      const formattedValue = `${month}/${year}`;
      setDate(formattedValue);
    }
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
        <Text style={[planscss.text1, { fontSize: 20, marginHorizontal: '10%' }]}>Fill your Credit / Debit Card Details</Text>
      </View>
      <TextInput
        style={[planscss.textimput, emptyInputError]}
        onChangeText={setName}
        value={name}
        placeholder="First Name"
        placeholderTextColor="gray"
      />
      <TextInput
        style={[planscss.textimput, emptyInputError]}
        onChangeText={setSurname}
        value={surname}
        placeholder="Last Name"
        placeholderTextColor="gray"
      />
      <TextInput
        style={[planscss.textimput, cardNumberError , emptyInputError]}
        onChangeText={handlecartlengt}
        maxLength={16}
        value={cart}
        placeholder="Card Number"
        placeholderTextColor="gray"
        keyboardType="numeric"

      />
      <TextInput
        style={[planscss.textimput, emptyInputError]}
        onChangeText={handleDateChange}
        value={date}
        placeholder="Expiration Date (MM/YY)"
        placeholderTextColor="gray"
        keyboardType="numeric"

      />

      <TextInput
        style={[planscss.textimput, securityerror , emptyInputError]}
        onChangeText={handlesecuritylengt}
        maxLength={3}
        value={security}
        placeholder="Security Code (CVV)"
        placeholderTextColor="gray"
        keyboardType="numeric"

      />
      <TextInput
        style={[planscss.textimput, emptyInputError]}
        onChangeText={setAmount}
        value={amount}
        placeholder="Amount"
        placeholderTextColor="gray"
        keyboardType="numeric"
      />
      <View style={[planscss.touch, { marginTop: '7%' }]}>
        <TouchableOpacity onPress={() => navigation.navigate('PalnsPage1')}>
          <Text style={planscss.text9}>Change your choice</Text>
        </TouchableOpacity>
      </View>
      <View style={planscss.buton}>
        <TouchableOpacity style={[planscss.touc, { marginTop: '-1%' }]} onPress={()=>handlePayment()}>
          <Text style={planscss.text5}> Continue </Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}

export default PlansPage3

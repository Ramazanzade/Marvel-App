import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import planscss from './planscss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const PlansPage5 = ({ navigation }: any) => {
    const [backgroundColors, setBackgroundColors] = useState(['', '', ' ']);
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
                <Text style={[planscss.text1, { fontSize: 20, textAlign: 'center', marginTop: '10%' }]}>Payment Verified</Text>
            </View>
            <View>
                <View style={planscss.ticketview}> 
                    <FontAwesomeIcon
                    icon={faCheck}
                    style={planscss.icon4}
                    size={100}
                />
                </View>
            </View>
            <View style={planscss.buton}>
                <TouchableOpacity style={[planscss.touc, { marginTop: "30%" , backgroundColor:'red'}]} onPress={() => navigation.navigate('HomeScreen', { screen: 'Home' })}>
                    <Text style={planscss.text5}> Continue </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default PlansPage5
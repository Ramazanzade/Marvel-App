import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import singupcss from './singupcss'
import onboardingcss from '../../Onboarding/onboardingcss'

const Singup = ({ navigation }: any) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    return (
        <View style={singupcss.view}>
            <View style={singupcss.imgview}>
                <Image
                    style={singupcss.img}
                    source={require('../../asset/imge/2.png')}
                />
            </View>
            <View>
                <TextInput
                    style={[singupcss.input, { marginBottom: 20 }]}
                    onChangeText={setemail}
                    value={email}
                    placeholder="Enter your Email ID"
                    placeholderTextColor="gray"
                />
                <TextInput
                    style={singupcss.input}
                    onChangeText={setpassword}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor="gray"
                />
                <TouchableOpacity
                    style={singupcss.touc}
                    onPress={() => navigation.navigate('LoginRegisterScreen', { screen: 'Singup' })}>
                    <Text style={singupcss.text}>
                        Singup
                    </Text>
                </TouchableOpacity>
            </View>
<View style={singupcss.textbig}>
    <Text style={singupcss.text2}> or </Text>
    <Text style={singupcss.text1}> Continue With </Text>
</View>
        </View>
    )
}

export default Singup
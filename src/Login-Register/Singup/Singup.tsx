import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import singupcss from './singupcss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const Singup = ({ navigation }: any) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [hideNumbers, setHideNumbers] = useState(false);
    const [hideText, setHideText] = useState(true);

    const handleToggleHideNumbers = () => {
        setHideNumbers(!hideNumbers);
        setHideText(!hideText);
    };
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
                <View>
                    <TouchableOpacity onPress={handleToggleHideNumbers} style={singupcss.toggle}>
                        {hideNumbers
                            ? <FontAwesomeIcon icon={faEye} style={singupcss.icon2} size={20} />
                            : <FontAwesomeIcon icon={faEyeSlash} style={singupcss.icon2} size={20} />
                        }
                    </TouchableOpacity>
                    <TextInput
                        style={singupcss.input}
                        onChangeText={setpassword}
                        value={hideText ? password.replace(/./g, '*') : password}
                        placeholder="Password"
                        placeholderTextColor="gray"
                    />
                </View>
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
            <View style={singupcss.touchview}>
                <TouchableOpacity style={singupcss.toucicon}>
                    <FontAwesomeIcon
                        icon={faFacebook}
                        style={singupcss.icon}
                        size={50}
                    />
                    <Text style={singupcss.text3}>FaceBook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={singupcss.toucicon}>
                    <FontAwesomeIcon
                        icon={faGoogle}
                        style={singupcss.icon1}
                        size={50}
                    />
                    <Text style={singupcss.text3}>Google</Text>
                </TouchableOpacity>
            </View>
            <View style={singupcss.fouter}>
                <Text style={singupcss.text4}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={singupcss.text5}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Singup
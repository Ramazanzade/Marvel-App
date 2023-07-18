import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import profilecss from './profilecss'

const ProfilePage4 = ({ navigation, route , index }: any) => {
    const { selectedAvatarImage } = route.params;
    const { username } = route.params;
    const [password, setpassword] = useState('')
    const [code, setCode] = useState({
        digit1: '',
        digit2: '',
        digit3: '',
        digit4: '',
    });
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);

    const [inputStyle, setInputStyle] = useState({
        height: 70,
        fontSize: 20,
        width: 60,
    })
    const handleContentSizeChange = ({ nativeEvent: { contentSize } }: any) => {
        const inputHeight = contentSize.height;
        const fontSize = inputHeight / 2;
        setInputStyle({ ...inputStyle, fontSize });
    };

    const handleCodeChange = (key: any, value: string) => {
        setCode((prevCode) => ({ ...prevCode, [key]: value }));
    };
    const focusNextInput = (nextInput: any) => {
        nextInput.current.focus();
    };

    const verify = () => {
        const { digit1, digit2, digit3, digit4 } = code;
        const enteredCode = `${digit1}${digit2}${digit3}${digit4}`;
        if (enteredCode === "1111") {
            navigation.navigate('Tabbar', {
                screen: 'Home',
                params: {}
            })

        }
    }

    return (
        <View style={profilecss.container}>
            <View style={profilecss.imgview}>
                <Image
                    style={profilecss.img}
                    source={require('../asset/imge/2.png')}
                />
            </View>
            <View style={profilecss.textview}>
                <Text style={[profilecss.text, { marginTop: '5%' }]}>Create a Pin</Text>
            </View>
            <View>
                <Image
                    style={profilecss.avatart1}
                    source={selectedAvatarImage}
                />
            </View>
            <View style={profilecss.inputview}>
                <TextInput
                    ref={input1Ref}
                    keyboardType="numeric"
                    maxLength={1}
                    style={[profilecss.input, inputStyle]}
                    onContentSizeChange={handleContentSizeChange}
                    onChangeText={(value) => { handleCodeChange('digit1', value); focusNextInput(input2Ref) }}
                    multiline
                />
                <TextInput
                    keyboardType="numeric"
                    maxLength={1}
                    ref={input2Ref}
                    style={[profilecss.input, inputStyle]}
                    onChangeText={(value) => { handleCodeChange('digit2', value); focusNextInput(input3Ref) }}
                />
                <TextInput
                    keyboardType="numeric"
                    maxLength={1}
                    ref={input3Ref}
                    style={[profilecss.input, inputStyle]}
                    onChangeText={(value) => { handleCodeChange('digit3', value); focusNextInput(input4Ref) }}
                />
                <TextInput
                    keyboardType="numeric"
                    maxLength={1}
                    ref={input4Ref}
                    style={[profilecss.input, inputStyle]}
                    onChangeText={(value) => handleCodeChange('digit4', value)}
                />
            </View>
            <View style={profilecss.textview1}>
                <Text style={profilecss.text1}>
                    This pin will be used to log-in to your profile
                </Text>
            </View>
            <View style={profilecss.buton}>
                <TouchableOpacity style={[profilecss.touc, { marginTop: '30%' }]} onPress={() => navigation.navigate('ProfilePage5',
                { selectedAvatarImage: selectedAvatarImage,
                    selectedAvatarIndex: index,
                    username:username
            }
                )}>
                    <Text style={profilecss.text5}>I’m all safe now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfilePage4
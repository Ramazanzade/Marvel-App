import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import profilecss from './profilecss'

const ProfilePage3 = ({ navigation, route , index}: any) => {
    const { selectedAvatarImage } = route.params;
    const { username } = route.params;
    const [password, setpassword] = useState('')

    return (
        <View style={profilecss.container}>
            <View style={profilecss.imgview}>
                <Image
                    style={profilecss.img}
                    source={require('../asset/imge/2.png')}
                />
            </View>
            <View style={profilecss.textview}>
                <Text style={[profilecss.text, { marginTop: '5%' }]}>Choose a Password</Text>
            </View>
            <View>
                <Image
                    style={profilecss.avatart1}
                    source={selectedAvatarImage}
                />
            </View>
            <View style={profilecss.changeview}>
                <TouchableOpacity onPress={() => navigation.navigate('ProfilePage1')}>
                    <Text style={profilecss.change}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={profilecss.usernameview}>
                <Text style={profilecss.username}>{username}</Text>
            </View>
            <View>
                <TextInput
                    style={profilecss.textimput}
                    onChangeText={setpassword}
                    value={password}
                    placeholder="Create a password"
                    placeholderTextColor="gray"
                />
            </View>
            <View style={profilecss.buton}>
                <TouchableOpacity style={[profilecss.touc, { marginTop: '40%' }]} onPress={() => navigation.navigate('ProfilePage4',{ selectedAvatarImage: selectedAvatarImage,
      selectedAvatarIndex: index,
      username:username
    } )}>
                    <Text style={profilecss.text5}>Looks Strong</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfilePage3
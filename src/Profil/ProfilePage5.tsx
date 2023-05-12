import { View, Image, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import profilecss from './profilecss'

const ProfilePage5 = ({ navigation, route, index }: any) => {
    const { selectedAvatarImage } = route.params;
    const [username, setusername] = useState('')

    return (
        <View style={profilecss.container}>
            <View style={profilecss.imgview}>
                <Image
                    style={[profilecss.img]}
                    source={require('../asset/imge/2.png')}
                />
            </View>
            <View style={profilecss.textview}>
                <Text style={[profilecss.text, { marginTop: '5%' }]}>Your Profile is Created
                    Successfully!!</Text>
            </View>
               <View style={profilecss.avatartview}>
               <Image
                    style={[profilecss.avatar, {
                        width:200,
                        height:200,
                        borderRadius:100
                    }]}
                    source={selectedAvatarImage}
                />
               </View>
            <View style={profilecss.usernameview1}>
                <Text style={profilecss.username1}>{username}:nsjada</Text>
            </View>
            <View style={profilecss.buton}>
                <TouchableOpacity style={[profilecss.touc, { marginTop: '20%' }]} onPress={() => navigation.navigate('HomeScreen', {
                    selectedAvatarImage: selectedAvatarImage,
                    selectedAvatarIndex: index,
                    username: username
                })}>
                    <Text style={profilecss.text5}>Eat Your Green Vegitables</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfilePage5
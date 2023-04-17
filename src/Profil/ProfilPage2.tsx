import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import profilecss from './profilecss'

const ProfilePage2 = ({ navigation, route , index}: any) => {
  const { selectedAvatarImage } = route.params;
  const [username, setusername] = useState('')

  return (
    <View style={profilecss.container}>
      <View style={profilecss.imgview}>
        <Image
          style={profilecss.img}
          source={require('../asset/imge/2.png')}
        />
      </View>
      <View style={profilecss.textview}>
        <Text style={[profilecss.text, { marginTop: '5%' }]}>Enter your Username</Text>
      </View>
      <View>
        <Image
          style={profilecss.avatart1}
          source={selectedAvatarImage}
        />
      </View>
      <View style={profilecss.changeview}>
        <TouchableOpacity onPress={()=>  navigation.navigate('ProfilePage1')}>
          <Text style={profilecss.change}>Change</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={profilecss.textimput}
          onChangeText={setusername}
          value={username}
          placeholder="Username"
          placeholderTextColor="gray"
        />
      </View>
      <View style={profilecss.buton}>
        <TouchableOpacity style={[profilecss.touc, { marginTop: '40%' }]} onPress={() => navigation.navigate('ProfilePage3',  {
      selectedAvatarImage: selectedAvatarImage,
      selectedAvatarIndex: index,
      username:username
    })}>
          <Text style={profilecss.text5}>Call me this</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfilePage2
import { View, Image, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import profilecss from './profilecss'

const ProfilePage1 = () => {
    return (
        <View style={profilecss.container}>
            <View style={profilecss.imgview}>
                <Image
                    style={profilecss.img}
                    source={require('../asset/imge/2.png')}
                />
            </View>
            <View style={profilecss.textview}>
                <Text style={profilecss.text}>Choose your Avatar</Text>
            </View>
            <View style={profilecss.avatarview}>
                <TouchableOpacity>
                <Image
                    style={profilecss.avatar}
                    source={require('../asset/imge/avatar1.jpg')}
                />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image
                    style={profilecss.avatar}
                    source={require('../asset/imge/avatar2.jpg')}
                />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ProfilePage1
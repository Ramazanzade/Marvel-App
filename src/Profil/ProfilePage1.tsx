import { View, Image, Text , TouchableOpacity} from 'react-native'
import React , {useState} from 'react'
import profilecss from './profilecss'

const ProfilePage1 = ({navigation}:any) => {
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const handleAvatarPress = (imageSource: any) => {
      setSelectedAvatar(imageSource);
    };
  
    const renderAvatar = (source: any, index: number) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => handleAvatarPress(source)}
          style={[
            profilecss.avatarview,
            selectedAvatar === source && profilecss.selectedAvatar,
            index % 2 !== 0 && { marginLeft: '13%', marginTop:'3%'},
            { flexDirection: 'row' }
          ]}
        >
          <Image style={profilecss.avatar} source={source} />
        </TouchableOpacity>
      );
    };
  
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
            <View style={profilecss.avatarsContainer}>
        {[
          require('../asset/imge/avatar1.jpg'),
          require('../asset/imge/avatar2.jpg'),
          require('../asset/imge/avatar3.jpg'),
          require('../asset/imge/avatar4.jpg'),
          require('../asset/imge/avatar5.jpg'),
          require('../asset/imge/avatar6.jpg'),
          require('../asset/imge/avatar7.jpg'),
          require('../asset/imge/avatar8.jpg'),
        ].map(renderAvatar)}
      </View>
           <View style={profilecss.buton}>
                <TouchableOpacity style={[profilecss.touc, {marginTop:'-5%'}]} onPress={()=>{
                  navigation.navigate('ProfilPage2', { selectedAvatarImage: selectedAvatar })                }}>
                    <Text style={profilecss.text5}> Looks Good </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ProfilePage1
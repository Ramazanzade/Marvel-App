import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Morehomecss from './Morehomecss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import profilecss from '../../Profil/profilecss';

const MoreHome = ({ navigation }: any) => {

    return (
        <View style={Morehomecss.view}>
            <View>
                <View style={profilecss.avatartview}>
                    <Image
                        style={[profilecss.avatar, {
                            width: 200,
                            height: 200,
                            borderRadius: 100
                        }]}
                        source={require('../../asset/imge/avatar1.jpg')}
                    />
                </View>
                <View style={profilecss.usernameview1}>
                    <Text style={profilecss.username1}>Nizam</Text>
                </View>
            </View>
            <View style={Morehomecss.view1}>
                <TouchableOpacity style={Morehomecss.touc} onPress={() => navigation.navigate('Account')}>
                    <Text style={Morehomecss.text}>Account</Text>
                    <FontAwesomeIcon icon={faCaretRight} style={Morehomecss.icon1} size={25} />
                </TouchableOpacity>
                <View style={Morehomecss.line}></View>
                <TouchableOpacity style={Morehomecss.touc} onPress={()=>navigation.navigate('LoginRegisterScreen', {
                            screen: 'Singup'})}>
                    <Text style={Morehomecss.text}>Sign out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MoreHome;

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Morehomecss from '../MoreHome/Morehomecss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Account = () => {
    return (
        <View style={Morehomecss.accountview}>
            <View>
                <Text></Text>
            </View>
            <View>
                <Text></Text>
            </View>
            <View>
                <View style={Morehomecss.iconview} >
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faPlus} style={Morehomecss.icon} size={95} color='rgba(255, 255, 255, 0.3)' />
                    </TouchableOpacity>
                </View>
                <Text style={Morehomecss.icontext}> Change profile </Text>
            </View>
        </View>
    )
}

export default Account
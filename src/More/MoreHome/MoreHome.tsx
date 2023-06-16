import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Morehomecss from './Morehomecss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCaretRight } from '@fortawesome/free-solid-svg-icons';

const MoreHome = ({navigation}:any) => {
    return (
        <View style={Morehomecss.view}>
            <View>
                <Text> picture and name come for profile </Text>
            </View>
            <View style={Morehomecss.view1}>
                <TouchableOpacity style={Morehomecss.touc}  onPress={() => navigation.navigate('Account')}>
                    <Text style={Morehomecss.text}>Account</Text>
                    <FontAwesomeIcon icon={faCaretRight} style={Morehomecss.icon1} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={Morehomecss.touc} onPress={() => navigation.navigate('Language')}>
                    <Text style={Morehomecss.text}>Language</Text>
                    <FontAwesomeIcon icon={faCaretRight} style={Morehomecss.icon1} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={Morehomecss.touc} onPress={() => navigation.navigate('Chat')}>
                    <Text style={Morehomecss.text}>Chat</Text>
                    <FontAwesomeIcon icon={faCaretRight} style={Morehomecss.icon1} size={25} />
                </TouchableOpacity>
                <View style={Morehomecss.line}></View>
                <TouchableOpacity style={Morehomecss.touc}>
                    <Text style={Morehomecss.text}>Sign out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MoreHome
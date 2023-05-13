import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Downloadcss from '../Home/Downloadcss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Download = () => {
    return (
        <View style={{ backgroundColor: 'black', flex: 1 }}>
            <View>
                <Image
                    source={require('../asset/imge/6.jpg')}
                    style={Downloadcss.img}
                />
            </View>
            <View style={Downloadcss.view}><Text style={Downloadcss.text}>Ant-Man and The WaspQuantumania</Text></View>
            <View style={Downloadcss.view4}>
                <View style={Downloadcss.view2}><FontAwesomeIcon icon={faChevronRight} style={Downloadcss.icon} size={55} /></View>
                <View style={Downloadcss.view3}>
                    <TouchableOpacity style={Downloadcss.touc1} >
                        <Text style={Downloadcss.text1}>Download</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Downloadcss.touc2} >
                        <Text style={Downloadcss.text2}>+ Add to Watchlist</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Downloadcss.textview}>
                <Text style={Downloadcss.text3}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut delectus nulla autem laudantium aut, commodi, itaque error cumque labore facere debitis excepturi in, voluptas adipisci voluptatem temporibus pariatur neque asperiores et molestiae earum mollitia voluptatibus dolores. Explicabo deserunt autem dolor, enim soluta ea quia a, corporis dolore, ipsa quibusdam natus?
                </Text>
            </View>
        </View>
    )
}

export default Download
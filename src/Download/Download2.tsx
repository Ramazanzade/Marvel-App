import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import downloadcss from './downloadcss';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Download2 = ({ navigation }: any) => {
    const DATA = [
        { id: 0, img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, text: 'Spider-Man: Homecoming', strong: '1.2GB' },
        { id: 1, img: { uri: 'https://www.lifehacker.com.au/wp-content/uploads/sites/4/2022/11/09/marvel-movies-watch-runtime.jpg?quality=80&resize=1280,720' }, text: 'Spider-Man: Homecoming', strong: '1.2GB' },
        { id: 2, img: { uri: 'https://i.guim.co.uk/img/media/978bb76aaf05d05513f35f26c73ea61ad28b7f60/0_614_2628_1577/master/2628.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0617fd285bbed119999eafa2ffb03e55' }, text: 'Spider-Man: Homecoming', strong: '1.2GB' }
    ];
    const render1 = ({ item }: any) => {
        return (
            <View style={downloadcss.imput}>
                <View style={downloadcss.view}>
                    <TouchableOpacity style={downloadcss.movieimgview} >
                        <Image
                            style={downloadcss.movieimg}
                            source={item.img}
                        />
                    </TouchableOpacity>
                    <View style={downloadcss.view3}>
                        <Text style={downloadcss.text1}>{item.text}</Text>

                        <View style={downloadcss.view1}>
                            <View>
                                <View style={downloadcss.view2}></View>
                                <View style={downloadcss.view4}>
                                    <Text style={downloadcss.text2}>0% Watched</Text>
                                </View>
                            </View>
                            <View style={downloadcss.view5}>
                                <Text style={downloadcss.text3}>{item.strong}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={downloadcss.deletview}>
                        <FontAwesomeIcon
                            icon={faTrash}
                            style={downloadcss.icon1}
                            size={18}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={{ backgroundColor: 'black', flex: 1 }}>
            <FlatList
                data={DATA}
                renderItem={render1}
                contentContainerStyle={{ flexGrow: 1 }}
            />
        </View>
    )
}

export default Download2
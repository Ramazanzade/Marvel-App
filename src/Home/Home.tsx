import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import homecss from './homecss'
import Tabbar from '../navigation/Tab/Tabbar';

const Home = () => {
  const DATA = [
    { id: 0, img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' } },
    { id: 1, img: { uri: 'https://www.lifehacker.com.au/wp-content/uploads/sites/4/2022/11/09/marvel-movies-watch-runtime.jpg?quality=80&resize=1280,720' } },
    { id: 2, img: { uri: 'https://i.guim.co.uk/img/media/978bb76aaf05d05513f35f26c73ea61ad28b7f60/0_614_2628_1577/master/2628.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0617fd285bbed119999eafa2ffb03e55' } }
  ];
  const render1 = ({item}:any) => {
  return(
    <TouchableOpacity style={homecss.movieimgview}> 
    <Image
      style={homecss.movieimg}
      source={item.img}
    />  
    </TouchableOpacity>
  )
  }
  const render2 = ({item}:any) => {
    return(
      <TouchableOpacity style={homecss.movieimgview}> 
      <Image
        style={homecss.movieimg}
        source={item.img}
      />  
      </TouchableOpacity>
    )
    }
    const render3 = ({item}:any) => {
      return(
        <TouchableOpacity style={homecss.movieimgview}> 
        <Image
          style={homecss.movieim1}
          source={item.img}
        />  
        </TouchableOpacity>
      )
      }









  return (
    <View style={homecss.container}>
      <View style={homecss.imgview}>
        <Image
          style={homecss.img}
          source={require('../asset/imge/2.png')}
        />
      </View>
      <View>
        <View style={homecss.textview}>
          <Text style={homecss.text}>Latest Movies</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={render1}
          horizontal={true}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>


      <View>
        <View style={homecss.textview}>
          <Text style={homecss.text}>Latest Movies</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={render2}
          horizontal={true}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>


      <View>
        <View style={homecss.textview}>
          <Text style={homecss.text}>Latest Movies</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={render3}
          horizontal={true}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>




    </View>
  )
}

export default Home
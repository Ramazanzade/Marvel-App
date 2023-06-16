import { View, Text, TouchableOpacity, Image , FlatList} from 'react-native'
import React from 'react'
import downloadcss from './downloadcss';

const Watchlist = () => {
  const DATA = [
    { id: 0, img: { uri: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg' }, text: 'Spider-Man: Homecoming', strong: '1.2GB' },
    { id: 1, img: { uri: 'https://www.lifehacker.com.au/wp-content/uploads/sites/4/2022/11/09/marvel-movies-watch-runtime.jpg?quality=80&resize=1280,720' }, text: 'Spider-Man: Homecoming', strong: '1.2GB' },
    { id: 2, img: { uri: 'https://i.guim.co.uk/img/media/978bb76aaf05d05513f35f26c73ea61ad28b7f60/0_614_2628_1577/master/2628.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0617fd285bbed119999eafa2ffb03e55' }, text: 'Spider-Man: Homecoming', strong: '1.2GB' },
    { id: 3, img: { uri: 'https://i.guim.co.uk/img/media/978bb76aaf05d05513f35f26c73ea61ad28b7f60/0_614_2628_1577/master/2628.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0617fd285bbed119999eafa2ffb03e55' }, text: 'Spider-Man: Homecoming', strong: '1.2GB' },
    { id: 5, img: { uri: 'https://i.guim.co.uk/img/media/978bb76aaf05d05513f35f26c73ea61ad28b7f60/0_614_2628_1577/master/2628.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0617fd285bbed119999eafa2ffb03e55' }, text: 'Spider-Man: Homecoming', strong: '1.2GB' },
    { id: 6, img: { uri: 'https://i.guim.co.uk/img/media/978bb76aaf05d05513f35f26c73ea61ad28b7f60/0_614_2628_1577/master/2628.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0617fd285bbed119999eafa2ffb03e55' }, text: 'Spider-Man: Homecoming', strong: '1.2GB' },
    { id: 7, img: { uri: 'https://i.guim.co.uk/img/media/978bb76aaf05d05513f35f26c73ea61ad28b7f60/0_614_2628_1577/master/2628.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0617fd285bbed119999eafa2ffb03e55' }, text: 'Spider-Man: Homecoming', strong: '1.2GB' },

];

const renderitem = ({item}:any)=>{
  return(
    <View>
 <View>
 <TouchableOpacity style={downloadcss.imgview2}>
    <Image
     style={downloadcss.movieimg1}
      source={item.img} />
    </TouchableOpacity>
 </View>
  </View>
  )
  
}
  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
           <View style={downloadcss.imgview1}>
           <FlatList
                data={DATA}
                renderItem={renderitem}
                contentContainerStyle={{ flexGrow: 1 }}
                horizontal={false}
                numColumns={3}
                
                />
           </View>

        </View>
  )
}

export default Watchlist
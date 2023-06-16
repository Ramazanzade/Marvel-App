import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faNoteSticky, faDownload, faBars } from '@fortawesome/free-solid-svg-icons';
import tabbarcss from './tabbarcss';
import HomeScreen from '../Stack/HomeStack/HomeScreen';
import DownloadScreen from '../Stack/DownloadStack/DownloadScreen';
import CategoriesScreen from '../Stack/CategoriesStack/CategoriesScreen';
import MoreScreen from '../Stack/MoreStack/MoreScreen';


const Tab = createBottomTabNavigator();



const Tabbar = ({ route }: any) => {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'red',
        height: 60,
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        borderColor: 'rgba(0, 0, 0, 0.7)',
        borderWidth:2,
        
      },
      tabBarInactiveBackgroundColor: 'rgba(0, 0, 2, 2)', 
            tabBarActiveTintColor: "rgba(0, 0, 2, 2)",

    }}
  > 
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }:any) => <FontAwesomeIcon icon={faHome} style={tabbarcss.tabIcon} size={25} />,
          tabBarShowLabel: false,
        }}
        name="HomeScreen" component={HomeScreen}
      />
       <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }:any) => <FontAwesomeIcon icon={faNoteSticky} style={tabbarcss.tabIcon} size={25} />,
          tabBarShowLabel: false,
        }}
        name="DownloadScreen" component={DownloadScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }:any) => <FontAwesomeIcon icon={faDownload} style={tabbarcss.tabIcon} size={25} />,
          tabBarShowLabel: false,
        }}
        name="CategoriesScreen" component={CategoriesScreen}
      />
       <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }:any) => <FontAwesomeIcon icon={faBars} style={tabbarcss.tabIcon} size={25} />,
          tabBarShowLabel: false,
        }}
        name="MoreScreen" component={MoreScreen}
      />
      

    </Tab.Navigator>
  )
}

export default Tabbar;

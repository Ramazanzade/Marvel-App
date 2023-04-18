import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faChartArea, faPlus, faWallet, faUser , faChartBar } from '@fortawesome/free-solid-svg-icons';
import tabbarcss from './tabbarcss';
import Home from '../../Home/Home';
import Onboarding from '../../Onboarding/Onboarding';
import PlansPage2 from '../../Plans/PlansPage2';
import HomeScreen from '../Stack/HomeStack/HomeScreen';


const Tab = createBottomTabNavigator();



const Tabbar = ({ route }: any) => {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#121433',
        height: 60,
        shadowColor: '#121433',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        borderColor: '#121433',
        borderWidth:2,
        
      },
      tabBarInactiveBackgroundColor: '#121433', 
            tabBarActiveTintColor: "#121433",

    }}
  > 
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }:any) => <FontAwesomeIcon icon={faHome} style={tabbarcss.tabIcon} size={25} />,
          tabBarShowLabel: false,
        }}
        name="HomeScreen" component={HomeScreen}
      />
      {/* <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }:any) => <FontAwesomeIcon icon={faChartArea} style={tabbarcss.tabIcon} size={25} />,
          tabBarShowLabel: false,
        }}
        name="HomeScreen" component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }:any) => <FontAwesomeIcon icon={faPlus} style={tabbarcss.middleIcon} size={15} />,
          tabBarShowLabel: false,
        }}
        name="HomeScreen" component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }:any) => <FontAwesomeIcon icon={faChartBar} style={tabbarcss.tabIcon} size={25} />,
          tabBarShowLabel: false,
        }}
        name="HomeScreen" component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }:any) => <FontAwesomeIcon icon={faUser} style={tabbarcss.tabIcon} size={25} />,
          tabBarShowLabel: false,
        }}
        name="HomeScreen" component={HomeScreen}
      /> */}
    </Tab.Navigator>
  )
}

export default Tabbar;

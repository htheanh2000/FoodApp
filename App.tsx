/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler';
import React from 'react';
import { Splash, Cook , Analytics } from './src/screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from './src/component/icon'
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const MainTab = (): React.ReactElement => (
  <Tab.Navigator
    activeColor="#fff"
    barStyle=
    {
      {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        position: 'absolute',
        borderTopWidth: 0,
        elevation: 0,
      }
    }
  >
    <Tab.Screen name={"Splash"} component={Splash}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon src={require("./src/assets/chef.png")} color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen name={"Cook"} component={Cook}
      options={{
        tabBarLabel: 'Cook',
        tabBarIcon: ({ color }) => (
          <Icon src={require("./src/assets/search.png")} color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen name={"Cook"} component={Cook}
      options={{
        tabBarLabel: 'Cook',
        tabBarIcon: ({ color }) => (
          <Icon src={require("./src/assets/profile-user.png")} color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
};


export default App;

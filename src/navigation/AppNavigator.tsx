import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from '../screens/UserListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: '600',
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen 
        name="UserList" 
        component={UserListScreen} 
        options={{ title: 'Users' }} 
      />
      <Stack.Screen 
        name="UserDetail" 
        component={UserDetailScreen} 
        options={({ route }) => ({ title: route.params.user.name })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

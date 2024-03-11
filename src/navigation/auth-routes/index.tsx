import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { InroLogin, Login } from '../../screens';


export type AuthStackParamList = {
    InroLogin: undefined
    Login: undefined;


};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="InroLogin">
            <Stack.Screen name="InroLogin" component={InroLogin} />
            <Stack.Screen name="Login" component={Login} />

        </Stack.Navigator>
    );
};

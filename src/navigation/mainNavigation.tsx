import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationHelper';
import { HomeStackScreen } from './home-routes';

export const MainNavigator = () => {


    return (
        <NavigationContainer ref={navigationRef}>
            <HomeStackScreen />
        </NavigationContainer>
    )
}



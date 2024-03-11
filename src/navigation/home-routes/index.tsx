
import { ContactInfo, ContactsList, } from "../../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const HomeStack = createNativeStackNavigator();



export const HomeStackScreen = () => {

    return (
        <HomeStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={'ContactsList'}
        >

            <HomeStack.Screen name="ContactsList" component={ContactsList} />
            <HomeStack.Screen name="ContactInfo" component={ContactInfo} />

        </HomeStack.Navigator>

    )
}


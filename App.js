import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack"
import Header from "./src/components/Header";
import Gallery from "./src/screens/Gallery";
import GalleryPhoto from "./src/screens/GalleryPhoto";
import {Provider} from "react-redux";
import store from "./src/store/store";

export default function App() {
    const Stack = createStackNavigator();

    return (
        <Provider store={store}>
            <View style={{flex: 1}}>
                <Header title="Gallery"/>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Gallery" component={Gallery}/>
                        <Stack.Screen name="Gallery Photo" component={GalleryPhoto}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </Provider>
    );
}

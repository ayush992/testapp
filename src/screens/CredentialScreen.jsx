import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Login, Signup } from './Login';
import Survey from './Survey';
import image from './image.png'

import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialBottomTabNavigator();

const theme = {
    ...DefaultTheme, // Extend the default theme
    roundness: 2, // Border radius
    colors: {
        ...DefaultTheme.colors, // Extend the default color theme
        primary: 'grey', // Grey color
        accent: 'whitesmoke', // Whitesmoke color
        background: 'white', // Background color
    },
};

const CredentialScreen = ({ navigation }) => {
    return (
            <View style={styles.container}>
                <Tab.Navigator
                    initialRouteName='Login'
                    activeColor='#fb562f'
                    inactiveColor='grey'
                    tabBarOptions={{
                        tabBarVisible: () => null // Hide the tab bar by default
                    }}
                >
                    <Tab.Screen name="Login" component={Login}
                        options={{
                            tabBarLabel: 'Login',
                            tabBarIcon: ({ color }) => (
                                <Icon name="login" size={25} color={color} />
                            )
                        }}
                    />
                    <Tab.Screen name="Signup" component={Signup}
                        options={{
                            tabBarLabel: 'Sign Up',
                            tabBarIcon: ({ color }) => (
                                <Icon name="upload" size={25} color={color} />
                            ),
                        }}
                    />
                    {/* <Tab.Screen name="Survey" component={Survey}
                        options={{
                            tabBarLabel: 'Survey',
                            tabBarIcon: ({ color }) => (
                                <Icon name="notification" size={25} color={color} />
                            ),
                        }}
                    /> */}
                </Tab.Navigator>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fb562f',
    },
});

export default CredentialScreen;
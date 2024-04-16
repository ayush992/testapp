import React from 'react'
import { Button, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';
import MapView from 'react-native-maps';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Survey = ({ navigation }) => {

    // const { width, height } = Dimensions.get('window'); const ASPECT_RATIO = width / height; const LATITUDE_DELTA = 0.0922; const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.map}></View>
            <KeyboardAvoidingView
                style={styles.fields}
            // keyboardShouldPersistTaps="handled"
            // behavior= { Platform.OS ==='ios' ? 'padding' : 'height'}
            // behavior= 'position'
            // keyboardVerticalOffset={-200} 
            >
                <TextInput
                    label='Name'
                    mode='flat'
                    dense={true}
                    style={styles.inputField}
                />
                <TextInput
                    label='Address'
                    mode='flat'
                    dense={true}
                    style={styles.inputField}
                />
                <TextInput
                    label='Email'
                    mode='flat'
                    dense={true}
                    style={styles.inputField}
                />
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                    <IconButton icon='camera' size={50} />
                    <IconButton icon='microphone' size={50} mode='contained-tonal' style={{ backgroundColor: '' }} rippleColor='green' />
                </View>
                <Button title='button' onPress={() => navigation.navigate('CredentialScreen')} color='#fb562f' />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        flex: 1,
        // backgroundColor: 'grey',
        height: windowHeight,
        width: windowWidth,
        // padding: 15,
    },
    map: {
        display: 'flex',
        width: '100%',
        height: 4 / 10 * windowHeight,
        backgroundColor: 'lightblue'
    },
    fields: {
        display: 'flex',
        position: 'absolute',
        padding: 15,
        height: 5.8 / 10 * windowHeight,
        width: windowWidth,
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(0,20,200,1)',
        bottom: 0,
        borderTopLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
})

export default Survey

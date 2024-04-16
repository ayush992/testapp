import { ScrollView, View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React, { useEffect } from 'react'


const SignUp = ({ navigation }) => {

    return (
        <View>
            <Text style={styles.container}>SignUp</Text>
            <TextInput />
            <Button title='login' onPress={() => { navigation.navigate('Login') }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        height: '100vh',
        // height: 100,
        width: '80vw'
        // width: 100
    },
});

MyScoptions = {
    topBar: {
        backButton: {},
    },
};

export default SignUp;
import { ScrollView, View, Text, Button, StyleSheet, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper'
import React, { useEffect, useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import image from './image.png'

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {
	const name = 'hello'
	const [email, setEmail] = useState();
	const [showPassword, setShowPassword] = useState(false);

	return (
		// <ImageBackground source={image} style={{ flex: 1, resizeMode: 'cover' }} >
			<SafeAreaProvider style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput label='Email' value={email}
						mode='flat'
						dense={true}
						style={styles.inputField}
						onChange={email => setEmail(email)}
					/>
					<TextInput mode='flat'
						label='Password'
						style={styles.inputField}
						secureTextEntry={!showPassword}
						right={
							<TextInput.Icon
								icon={showPassword ? 'eye-off' : 'eye'}
								onPress={() => setShowPassword(!showPassword)}
							/>
						}
					/>
				<Button color='#fb562f' title='Survey' onPress={() => { navigation.navigate('Survey') }} />
				</View>
			</SafeAreaProvider>
		// </ImageBackground>
	);
}

const Signup = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	return (
		<SafeAreaProvider style={styles.container}>
			<View
				behavior='height'
				keyboardVerticalOffset={-210} 
				style={styles.inputContainer}
			>
				<TextInput label='Name' value={email}
					mode='flat'
					dense={true}
					style={styles.inputField}
					onChange={email => setEmail(email)}
				/>
				<TextInput label='Email' value={email}
					mode='flat'
					dense={true}
					style={styles.inputField}
					onChange={email => setEmail(email)}
				/>
				{/* <TextInput label='Email' value={email}
					mode='flat'
					dense={true}
					style={styles.inputField}
					onChange={email => setEmail(email)}
				/> */}
				<TextInput mode='flat'
					label='Password'
					style={styles.inputField}
					secureTextEntry={!showPassword}
					right={
						<TextInput.Icon
							icon={showPassword ? 'eye-off' : 'eye'}
							onPress={() => setShowPassword(!showPassword)}
							size={20}
						/>
					}
				/>
				<TextInput mode='flat'
					label='Confirm Password'
					style={styles.inputField}
					secureTextEntry={!showPassword}
					right={
						<TextInput.Icon
							icon={showPassword ? 'eye-off' : 'eye'}
							onPress={() => setShowPassword(!showPassword)}
							size={20}
						/>
					}
				/>
				<Button color='#fb562f' title='Login' onPress={() => { navigation.navigate('Login') }} />
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		padding: 20,
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	inputContainer: {
		display: 'flex',
		height: Math.round(50 / 100 * windowHeight),
		width: Math.round(70 / 100 * windowWidth),
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: 15,
		borderRadius: 10,
		backgroundColor: 'rgba(0,0,0,0.2)',
	},
	inputField: {
		backgroundColor: 'rgba(255,255,255,0.9)',
		borderRadius: 5,
		width: '100%',
		fontFamily: 'Poppins-Regular',
		fontSize: 15,
	}
})


export { Login, Signup };
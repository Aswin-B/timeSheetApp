import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { Users } from '../data/Users';
import Toast from 'react-native-toast-message';
import { ActivityContext } from '../context/ActivityContext';
import { useContext } from 'react';

const Login = ({ navigation }: any) => {

    const { usersData, setUsersData, currentUser, setCurrentUser } = useContext(ActivityContext);

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleRegister = () => {
        if(!username){
            Alert.alert('Error', 'Please enter username');
            return;
        }
        else if(!password){
            Alert.alert('Error', 'Please enter password');
            return;
        }
        else if(!username || !password){
            Alert.alert('Error', 'Please enter username and password');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(username)){
            Alert.alert('Error', 'Please enter a valid email address');
            return;
        }

        else{
            const userExists = usersData.find((user: any) => user.username === username);
            if(userExists){
                Alert.alert("Error", "User already exists");
                return;
            }
            else{
                const newUser = {
                    username: username,
                    password: password
                }
                setUsersData([...usersData, newUser]);
                setCurrentUser(newUser);
                Toast.show({
                    type: 'success',
                    text1: 'Success',
                    text2: 'You have registered successfully !!',
                    position: 'bottom',
                    bottomOffset: 100
                });
                navigation.replace('Main');
            }
        }
    }
    
    const handleLogin = () => {
        
        if(!username){
            Alert.alert('Error', 'Please enter username');
            return;
        }
        else if(!password){
            Alert.alert('Error', 'Please enter password');
            return;
        }
        else if(!username || !password){
            Alert.alert('Error', 'Please enter username and password');
            return;
        }

        else{
            const user = usersData.find((user: any) => user.username === username && user.password === password);
            if(user){
                Toast.show({
                    type: 'success',
                    text1: 'Success',
                    text2: 'You have logged in successfully !!',
                    position: 'bottom',
                    bottomOffset: 100
                });
                setCurrentUser(user);

                navigation.replace('Main');
            }
            else{
                Toast.show({
                    type: 'error',
                    text1: 'Invalid Credentials',
                    text2: 'Please check your username and password',
                    position: 'bottom',
                    bottomOffset: 100
                });
            }
        }
    }
  return (
    <View style={styles.container}>
        <Text style={styles.appTitle}>Welcome To TimeSheet App</Text>
        <TextInput placeholder='Username' style={styles.input} value={username} onChangeText={(text) => setUsername(text)} />
        <TextInput placeholder='Password' style={styles.password} secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
        <View style={styles.btnContainer}>
            <Button title='Login' onPress={handleLogin}></Button>
            <Button title='Register' onPress={handleRegister}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  appTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  password: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 20,
  }
})

export default Login
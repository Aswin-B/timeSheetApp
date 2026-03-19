import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ActivityContext } from '../context/ActivityContext';

const Account = () => {
  const navigation = useNavigation<any>();
  const { currentUser } = useContext(ActivityContext);

  const currentUserFirstName = currentUser.username.split("@")[0];
  const capitalizedFirstName = currentUserFirstName.charAt(0).toUpperCase() + currentUserFirstName.slice(1);

  const handleLogout = () => {
    navigation.replace("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}} style={styles.profileImage} />
        <Text style={{marginTop: 10, fontSize: 20, fontWeight: 'bold'}}>{capitalizedFirstName}</Text>
        <Text>{currentUser.username}</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.editProfile} onPress={() => navigation.navigate('Home')}>
          <Icon name='home-outline' size={25} color='black'></Icon>
          <Text style={styles.optionText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editProfile}>
          <Icon name='person-outline' size={25} color='black'></Icon>
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editProfile}>
          <Icon name='lock-closed-outline' size={25} color='black'></Icon>
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editProfile}>
          <Icon name='notifications-outline' size={25} color='black'></Icon>
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editProfile} onPress={() => navigation.navigate('Settings')}>
          <Icon name='settings-outline' size={25} color='black'></Icon>
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editProfile} onPress={handleLogout}>
          <Icon name='log-out-outline' size={25} color='black'></Icon>
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    profileContainer:{
      justifyContent:'center',
      alignItems: 'center',
      // marginTop: 50,
      backgroundColor: 'lightgray',
      padding: 20,
    },
    profileImage:{
        width:100,
        height:100,
    },
    optionsContainer:{
      flex:1,
      // marginTop: 30,
      padding: 20,
      gap: 10,
      // backgroundColor: 'red',
    },
    editProfile:{
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      borderRadius: 5,
      color: '#fff'
    },
    optionText:{
      fontSize: 16,
    }
})
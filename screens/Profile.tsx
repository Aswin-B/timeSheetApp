import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const Profile = ({ navigation, route } : any) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>Name: {route.params.name}</Text>
      <Button title="Go to User" onPress={() => navigation.navigate('User')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Profile
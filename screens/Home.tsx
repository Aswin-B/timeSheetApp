import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const Home = ({ navigation } : any) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile', {name: 'Murugan'})} />
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

export default Home
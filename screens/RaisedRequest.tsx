import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const RaisedRequest = () => {
  return (
    <View style={styles.container}>
      <Text>RaisedRequest</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RaisedRequest
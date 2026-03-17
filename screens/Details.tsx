import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
import Icon from 'react-native-vector-icons/Entypo';

const Details = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      {/* <Header/> */}
      <View style={styles.header}>
          <Icon name='menu' size={26} color='white' onPress={() => navigation.openDrawer()}/>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Details</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text>User Details</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    backgroundColor: 'red',
    flexDirection: 'row',
    height: 100,
    // justifyContent: 'space-between',
    gap: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Details
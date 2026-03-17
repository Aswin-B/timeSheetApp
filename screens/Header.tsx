import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({navigation} : any) => {
  return (
    <View style={styles.header}>

      <Icon
        name="menu"
        size={26}
        color="white"
        onPress={() => navigation.openDrawer()}
      />

      <Text style={styles.title}>Time Sheet</Text>

      <Icon name='person' size={24} color='white' />
      {/* <Text style={{ color: 'white' }}>Admin</Text> */}

    </View>
  )
}

const styles = StyleSheet.create({

  header: {
    height: 100,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 50
  },

  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }

});

export default Header


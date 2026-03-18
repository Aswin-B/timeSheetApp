import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityContext } from '../context/ActivityContext';
import { FlatList } from 'react-native-gesture-handler';

const PendingLeaves = () => {
  const { totalActivity, setTotalActivity } = useContext(ActivityContext);
  const [searchText, setSearchText] = useState('');
  const filteredActivity = totalActivity.filter((activity: any) =>
    activity.activityName.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Pending Activity</Text>
      <Icon name='search' style={styles.iconStyle}/>
      <TextInput placeholder='Search Activity' style={styles.activityInput} value={searchText} onChangeText={(text) => setSearchText(text)}/>
      {totalActivity.length === 0 && 
        <View style={styles.noActivityText}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>No Data Available</Text>
          <Text style={{fontSize: 14, color: 'gray'}}>There is no data to show you right now</Text>
        </View>
      }
      <FlatList
        data={filteredActivity}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem = {({item}) => (
          <View style={styles.activityBox}>
            <Text style={styles.addedActivityText}>{item.activityName}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
  },
  activityInput: {
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    position: 'relative',
  },
  iconStyle: {
    position: 'absolute',
    fontSize: 20,
    top: 77,
    right: 30,

    // top: 80,
  },
  activityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // gap: 20,
  },
  addedActivityText:{
    fontSize: 16,
    marginTop: 15,
  },
  noActivityText: {
    flex: 1,
    fontSize: 16,
    color: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'gray',
    // marginTop: 20,
  }
});

export default PendingLeaves
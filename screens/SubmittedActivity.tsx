import { View, Text, StyleSheet, Button, TextInput, FlatList, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
// import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityContext } from '../context/ActivityContext';


const SubmittedActivity = () => {
  const [activity, setActivity] = useState('');
  // const [totalActivity, setTotalActivity] = useState<any[]>([
  //   {id: 1, activityName: "Request for leave"},
  //   {id: 2, activityName: "Request for work from home"},
  //   {id: 3, activityName: "Half Day Leave"},
  // ]);
  const { totalActivity, setTotalActivity } = useContext(ActivityContext);
  const addActivity = () => {
    if(!activity){
      Alert.alert('Error', 'Please enter an activity');
    }
    else{
      const newActivity = {
        id: Date.now(),
        activityName: activity
      }
      setTotalActivity([...totalActivity, newActivity]);
      setActivity('');
    }
  }

 const DeleteActivity = (itemId: any) => {
  Alert.alert(
    "Confirm Delete",
    "Are you sure you want to delete?",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Yes",
        onPress: () => {
          const updatedActivities = totalActivity.filter(
            (activity: any) => activity.id !== itemId
          );
          setTotalActivity(updatedActivities);
        }
      }
    ]
  );
};

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Submitted Activity</Text>
      <TextInput placeholder='Enter Activity' style={styles.activityInput} onChangeText={(text) => setActivity(text)} value={activity} />
      {totalActivity.length === 0 && 
        <View style={styles.noActivityText}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>No Data Available</Text>
          <Text style={{fontSize: 14, color: 'gray'}}>There is no data to show you right now</Text>
        </View>
      }
      <FlatList
        data={totalActivity}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => 
        (
          <View style={styles.activityBox}>
            <Text style={styles.addedActivityText}>{item.activityName}</Text>
            <Icon name="trash" size={20} color="red" onPress={() => DeleteActivity(item.id)} style={styles.trashIcon} />
            {/* () => {
              const updatedActivities = totalActivity.filter(activity => activity !== item);
              setTotalActivity(updatedActivities);
            } */}
          </View>
        )}
      />
      
      <Icon name="add-circle" style={styles.iconStyle} onPress={addActivity}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    position: 'relative',
  },
  activityInput:{
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  iconStyle:{
    position: 'absolute',
    right: 20,
    bottom: 20,
    fontSize: 50,
    color: 'red',
  },
  addedActivityText:{
    fontSize: 16,
    marginTop: 15,
  },
  activityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // gap: 20,
  },
  trashIcon: {
    top: 8
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

export default SubmittedActivity
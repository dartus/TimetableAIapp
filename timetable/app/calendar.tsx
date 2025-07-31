import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const calendar = () => {
  return (
    <View>
      <Text>calendar</Text>
      <Calendar
        onDayPress={day => {
          console.log('selected day', day);
        }}
      />
      
    </View>
  )
}

export default calendar

const styles = StyleSheet.create({})
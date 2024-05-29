// CalendarPicker.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Calendar from 'react-native-calendar-range-picker';

const CalendarPicker = ({ startDate, endDate, onChange }) => {
  const today = new Date().toISOString().split('T')[0]; // Format date as YYYY-MM-DD

  return (
    <View style={styles.calendarContainer}>
      <Calendar
        startDate={startDate || today}
        endDate={endDate}
        onChange={onChange}
        disabledBeforeToday={true}
        style={styles.calendarStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    width: '100%',
  },
  calendarStyle: {
    container: {},
    monthContainer: {},
    monthOverlayContainer: {},
    weekContainer: {},
    monthNameText: {},
    dayNameText: {},
    dayText: {},
    dayTextColor: '#5E77AA', // Custom color
    holidayColor: 'rgba(0,0,0,0.5)',
    todayColor: '#5E77AA', // Custom color
    disabledTextColor: '#D3D3D3',
    selectedDayTextColor: '#FFFFFF', // Custom color
    selectedDayBackgroundColor: '#5E77AA', // Custom color
    selectedBetweenDayTextColor: '#FFFFFF', // Custom color
    selectedBetweenDayBackgroundTextColor: '#5E77AA', // Custom color
  },
});

export default CalendarPicker;

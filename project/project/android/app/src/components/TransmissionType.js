import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const TransmissionType = () => {
  const [selected, setSelected] = React.useState("");

  const transmissions = [
    { key: '1', value: 'Manuelle' },
    { key: '2', value: 'Automatique' },
  ];

  return (
    <View style={styles.container}>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={transmissions}
        save="value"
        placeholder="Transmission"
        boxStyles={styles.box}
        inputStyles={styles.input}
        dropdownStyles={styles.dropdown}
        dropdownItemStyles={styles.dropdownItem}
        dropdownTextStyles={styles.dropdownText}
        search={false}
        searchPlaceholder="Transmission"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40, // Fixed height to prevent expanding
    justifyContent: 'center',
    position: 'relative', // Ensure positioning context
    marginLeft: 5,

  },
  box: {
    borderRadius: 20,
    borderColor:'black',
    height: 40,
    width: 110,
  },
  input: {
    fontSize: 10,
  },
  dropdown: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 40, // Adjust based on the height of the box
    left: 0,
    right: 0,
    zIndex: 10, // Ensure it appears above other elements
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dropdownText: {
    fontSize: 12,
  },
});

export default TransmissionType;

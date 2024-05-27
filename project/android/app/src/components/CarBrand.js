import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const CarBrand = () => {
  const [selected, setSelected] = React.useState("");

  const brands = [
    { key: '1', value: 'Renault' },
    { key: '2', value: 'Mercedes' },
    { key: '3', value: 'BMW' },
    // Add more car brands here
  ];

  return (
    <View style={styles.container}>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={brands}
        save="value"
        placeholder="Marque"
        boxStyles={styles.box}
        inputStyles={styles.input}
        dropdownStyles={styles.dropdown}
        dropdownItemStyles={styles.dropdownItem}
        dropdownTextStyles={styles.dropdownText}
        search={false}
        searchPlaceholder="Marque"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40, // Fixed height to prevent expanding
    justifyContent: 'center',
    position: 'relative', // Ensure positioning context
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

export default CarBrand;

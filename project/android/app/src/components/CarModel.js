import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const CarModel = () => {
  const [selected, setSelected] = React.useState("");

  const models = [
    { key: '1', value: 'Clio' },
    { key: '2', value: 'C-Class' },
    { key: '3', value: '3 Series' },
    // Add more car models here
  ];

  return (
    <View style={styles.container}>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={models}
        save="value"
        placeholder="Modèle"
        boxStyles={styles.box}
        inputStyles={styles.input}
        dropdownStyles={styles.dropdown}
        dropdownItemStyles={styles.dropdownItem}
        dropdownTextStyles={styles.dropdownText}
        search={false}
        searchPlaceholder="Modèle"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40, 
    justifyContent: 'center',
    position: 'relative', 
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

export default CarModel;

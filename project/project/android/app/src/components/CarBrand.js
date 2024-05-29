import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const CarBrand = ({ onSelectBrand }) => {
  const brands = [
    { key: 'Volkswagen', value: 'Volkswagen' },
    { key: 'BMW', value: 'BMW' },
    { key: 'Audi', value: 'Audi' },
    { key: 'Toyota', value: 'Toyota' },
    { key: 'Ford', value: 'Ford' },
    { key: 'Mercedes-Benz', value: 'Mercedes-Benz' },
    { key: 'Honda', value: 'Honda' },
    { key: 'Chevrolet', value: 'Chevrolet' },
    { key: 'Nissan', value: 'Nissan' },
    { key: 'Hyundai', value: 'Hyundai' },
    { key: 'Kia', value: 'Kia' }
  ];

  return (
    <View style={styles.container}>
      <SelectList
        setSelected={onSelectBrand}
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
    height: 40,
    justifyContent: 'center',
    position: 'relative',
  },
  box: {
    borderRadius: 20,
    borderColor: 'black',
    height: 40,
    width: 110,
  },
  input: {
    fontSize: 10,
  },
  dropdown: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    zIndex: 10,
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

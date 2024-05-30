import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const CarModel = ({ selectedBrand }) => {
  const modelsByBrand = {
    Volkswagen: ['Golf', 'Passat', 'Tiguan'],
    BMW: ['3 Series', '5 Series', 'X5'],
    Audi: ['A4', 'A6', 'Q5'],
    Toyota: ['Corolla', 'Camry', 'Prius'],
    Ford: ['Fiesta', 'Mustang', 'Explorer'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC'],
    Honda: ['Civic', 'Accord', 'CR-V'],
    Chevrolet: ['Spark', 'Malibu', 'Tahoe'],
    Nissan: ['Sentra', 'Altima', 'Rogue'],
    Hyundai: ['Elantra', 'Sonata', 'Tucson'],
    Kia: ['Rio', 'Optima', 'Sorento']
  };

  const models = modelsByBrand[selectedBrand] || [];

  return (
    <View style={styles.container}>
      <SelectList
        setSelected={(val) => {}}
        data={models.map(model => ({ key: model, value: model }))}
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

export default CarModel;

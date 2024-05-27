import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchPlace = () => {
  const [selected, setSelected] = React.useState("");

  const cities = [
    { key: '1', value: 'Agadir' },
    { key: '2', value: 'Ain Harrouda' },
    { key: '3', value: 'Ait Melloul' },
    { key: '4', value: 'Al Hoceima' },
    { key: '5', value: 'Assilah' },
    { key: '6', value: 'Azemmour' },
    { key: '7', value: 'Azrou' },
    { key: '8', value: 'Beni Mellal' },
    { key: '9', value: 'Berkane' },
    { key: '10', value: 'Berrechid' },
    { key: '11', value: 'Boujdour' },
    { key: '12', value: 'Bouskoura' },
    { key: '13', value: 'Casablanca' },
    { key: '14', value: 'Chefchaouen' },
    { key: '15', value: 'Dakhla' },
    { key: '16', value: 'El Jadida' },
    { key: '17', value: 'El Kelaa des Sraghna' },
    { key: '18', value: 'Errachidia' },
    { key: '19', value: 'Essaouira' },
    { key: '20', value: 'Fès' },
    { key: '21', value: 'Fnideq' },
    { key: '22', value: 'Fquih Ben Salah' },
    { key: '23', value: 'Guelmim' },
    { key: '24', value: 'Guercif' },
    { key: '25', value: 'Ifrane' },
    { key: '26', value: 'Imzouren' },
    { key: '27', value: 'Kenitra' },
    { key: '28', value: 'Khemisset' },
    { key: '29', value: 'Khenifra' },
    { key: '30', value: 'Khouribga' },
    { key: '31', value: 'Ksar El Kebir' },
    { key: '32', value: 'Laayoune' },
    { key: '33', value: 'Larache' },
    { key: '34', value: 'Marrakech' },
    { key: '35', value: 'Martil' },
    { key: '36', value: 'Meknès' },
    { key: '37', value: 'Midelt' },
    { key: '38', value: 'Mohammedia' },
    { key: '39', value: 'Nador' },
    { key: '40', value: 'Ouarzazate' },
    { key: '41', value: 'Oued Zem' },
    { key: '42', value: 'Oujda' },
    { key: '43', value: 'Rabat' },
    { key: '44', value: 'Safi' },
    { key: '45', value: 'Salé' },
    { key: '46', value: 'Sefrou' },
    { key: '47', value: 'Settat' },
    { key: '48', value: 'Sidi Bennour' },
    { key: '49', value: 'Sidi Ifni' },
    { key: '50', value: 'Sidi Kacem' },
    { key: '51', value: 'Sidi Slimane' },
    { key: '52', value: 'Skhirat' },
    { key: '53', value: 'Tanger' },
    { key: '54', value: 'Tan-Tan' },
    { key: '55', value: 'Taounate' },
    { key: '56', value: 'Taourirt' },
    { key: '57', value: 'Tarfaya' },
    { key: '58', value: 'Taroudant' },
    { key: '59', value: 'Taza' },
    { key: '60', value: 'Témara' },
    { key: '61', value: 'Tétouan' },
    { key: '62', value: 'Tiflet' },
    { key: '63', value: 'Tiznit' },
    { key: '64', value: 'Youssoufia' },
    { key: '65', value: 'Zagora' },
  ];
  return (
 
    <View style={styles.container}>
      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={cities} 
        save="value"
        placeholder="Sélectionnez une ville"
        inputStyles={styles.input}
        dropdownStyles={styles.dropdown}
        dropdownItemStyles={styles.dropdownItem}
        dropdownTextStyles={styles.dropdownText}
        search={true}
        searchicon={<Icon name="map-marker" size={20} color="#5E77AA" style={styles.icon} />}
        searchPlaceholder="Ville"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width:'85%',
  },
  input: {
    fontSize: 15,
  },
  dropdown: {
    backgroundColor: '#ffffff',
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dropdownText: {
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default SearchPlace;
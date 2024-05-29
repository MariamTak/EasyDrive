import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CarItem = ({ image, name, price, rating, numReviews }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
          <Text style={styles.ratingText}>{rating} ({numReviews})</Text>
        </View>
      </View>
        <View style={styles.row}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price}</Text>

        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Consulter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5', // Change this to the shade you desire
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E0E0', // Border color
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150, // Adjust the height of the image as needed
  },
  ratingContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
  },
  starIcon: {
    marginRight: 5,
  },
  ratingText: {
    fontSize: 14,
    color: 'gray',
  },
  infoContainer: {
    padding: 10,
    borderTopWidth: 1, // Add border to separate image and info
    borderColor: '#E0E0E0',
    height:80,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black',
  },
  price: {
    fontSize: 18,
    color:'black',

  },
  button: {
    backgroundColor: '#5E77AA',
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-end',
    borderRadius: 5,
    marginRight:5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CarItem;

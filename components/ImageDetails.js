import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetails = ({ route }) => {
  const { uri, latitude, longitude, timestamp } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
      <Text style={styles.text}>Latitude: {latitude}</Text>
      <Text style={styles.text}>Longitude: {longitude}</Text>
      <Text style={styles.text}>Timestamp: {timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default ImageDetails;
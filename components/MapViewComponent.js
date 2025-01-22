import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { fetchImages } from '../database/database';

const MapViewComponent = () => {
  const [imageLocations, setImageLocations] = useState([]);

  useEffect(() => {
    fetchImages(data => {
      setImageLocations(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {imageLocations.map(image => (
          <Marker
            key={image.id}
            coordinate={{ latitude: image.latitude, longitude: image.longitude }}
            title={`Image at ${image.timestamp}`}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});

export default MapViewComponent;

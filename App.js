import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageGallery from './components/ImageGallery';
import MapViewComponent from './components/MapViewComponent';
import { initializeDatabase } from './database/database';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    initializeDatabase();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gallery" component={ImageGallery} />
        <Stack.Screen name="Map" component={MapViewComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

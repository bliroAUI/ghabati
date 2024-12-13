import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
            latitude: 33.533333,
            longitude: -5.116667,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421, // Zoom level
        }}
      >
        {/* Example marker */}
        <Marker
          coordinate={{ latitude: 33.533333, longitude: -5.116667 }}
          title="Illegal Logging Detected"
          description="Status: Warning"
        />
        <Marker
          coordinate={{ latitude: 33.534716, longitude: -5.099316 }}
          title="Pest Outbreak in Zone A"
          description="Status: Critical"
        />
        <Marker
          coordinate={{ latitude: 33.523482, longitude: -5.103532 }}
          title="Forest Fire Contained"
          description="Status: Resolved"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';

export default function DataMenuScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Data Input Menu</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="New Data Input"
          color={Colors.light.primary}
          onPress={() => navigation.navigate('newDataInput')}
        />
        <View style={styles.spacer} />
        <Button
          title="View Data History"
          color={Colors.light.secondary}
          onPress={() => navigation.navigate('dataHistory')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: Colors.light.tint,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
  },
  spacer: {
    height: 20,
  },
});

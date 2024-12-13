import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';

export default function DashboardScreen() {
  const navigation = useNavigation(); // Use the hook to get navigation

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ghabati Dashboard</Text>
      <View style={styles.statCard}>
        <Text style={styles.statLabel}>Overall Health</Text>
        <Text style={styles.statValue}>85%</Text>
      </View>
      <View style={styles.statCard}>
        <Text style={styles.statLabel}>Total Alerts</Text>
        <Text style={styles.statValue}>3</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View Alerts"
          color={Colors.light.primary}
          onPress={() => navigation.navigate('alerts')} // Navigate to the Alerts tab
        />
        <Button
          title="Add Data"
          color={Colors.light.secondary}
          onPress={() => alert('Navigate to Add Data screen')} // Replace with navigation if needed
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
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2E7D32',
    textAlign: 'center',
  },
  statCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

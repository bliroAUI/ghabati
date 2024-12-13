import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Colors from '@/constants/Colors';
import { alerts } from './newDataInput'; // Adjust path as needed


// Define the Alert type
type Alert = {
  id: string;
  message: string;
  status: 'Critical' | 'Warning' | 'Resolved';
};

// Initial alerts data
const initialAlerts: Alert[] = [
  { id: '1', message: 'Illegal Logging Detected', status: 'Critical' },
  { id: '2', message: 'Pest Outbreak in Zone A', status: 'Warning' },
  { id: '3', message: 'Forest Fire Contained', status: 'Resolved' },
];

export default function AlertsScreen() {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);

  const updateStatus = (id: string, newStatus: Alert['status']) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === id ? { ...alert, status: newStatus } : alert
      )
    );
  };

  const renderAlert = ({ item }: { item: Alert }) => {
    const statusStyle =
      item.status === 'Critical'
        ? styles.alertCritical
        : item.status === 'Warning'
        ? styles.alertWarning
        : styles.alertResolved;
  
    return (
      <View style={[styles.alertCard, statusStyle]}>
        <View style={styles.alertContent}>
          <View style={styles.alertTextContainer}>
            <Text style={styles.alertMessage}>{item.message}</Text>
            <Text style={styles.alertStatus}>Status: {item.status}</Text>
          </View>
          {/* Dropdown Picker */}
          <Picker
            selectedValue={item.status}
            style={styles.picker}
            onValueChange={(value) => updateStatus(item.id, value as Alert['status'])}
          >
            <Picker.Item label="Critical" value="Critical" />
            <Picker.Item label="Warning" value="Warning" />
            <Picker.Item label="Resolved" value="Resolved" />
          </Picker>
        </View>
      </View>
    );
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Alerts</Text>
      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={renderAlert}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen
    backgroundColor: '#F5F5F5', // Light background color
    padding: 20, // Adds padding around the content
  },
  header: {
    fontSize: 24, // Large font size for the header
    fontWeight: 'bold', // Bold font weight for emphasis
    color: '#2E7D32', // Greenish color to match the forest theme
    marginBottom: 20, // Space below the header
    textAlign: 'center', // Center-align the header text
  },
  alertCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  alertContent: {
    flexDirection: 'row', // Aligns text and picker horizontally
    justifyContent: 'space-between', // Space between text and picker
    alignItems: 'center', // Centers items vertically
  },
  alertTextContainer: {
    flex: 1, // Ensures text takes available space
    marginRight: 10, // Adds spacing between text and picker
  },
  alertCritical: {
    backgroundColor: '#FFCDD2', // Light red
  },
  alertWarning: {
    backgroundColor: '#FFF9C4', // Light yellow
  },
  alertResolved: {
    backgroundColor: '#C8E6C9', // Light green
  },
  alertMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 5,
  },
  alertStatus: {
    fontSize: 14,
    color: Colors.light.text,
    marginBottom: 10,
  },
  picker: {
    width: 150, // Adjust width for better alignment
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
});

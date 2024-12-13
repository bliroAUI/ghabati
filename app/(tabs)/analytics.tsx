import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit'; // Install this package if not done yet
import { Dimensions } from 'react-native';
import { dataHistory } from './sharedState'; // Import shared state if applicable

const screenWidth = Dimensions.get('window').width;

export default function AnalyticsScreen() {
    // Aggregate data
    const generalCount = dataHistory.filter(item => item.category === 'General').length;
    const criticalCount = dataHistory.filter(item => item.category === 'Critical').length;
    const warningCount = dataHistory.filter(item => item.category === 'Warning').length;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Analytics</Text>
            <Text style={styles.subheader}>Alerts by Category</Text>

            <BarChart
                data={{
                    labels: ['General', 'Critical', 'Warning'],
                    datasets: [
                        {
                            data: [generalCount, criticalCount, warningCount],
                        },
                    ],
                }}
                width={screenWidth - 40} // Adjust for padding
                height={220}
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />

            <Text style={styles.subheader}>Trend Over Time</Text>
            <LineChart
                data={{
                    labels: ['Jan', 'Feb', 'Mar'], // Example months (update as needed)
                    datasets: [
                        {
                            data: [20, 45, 28], // Example data (replace with actual counts)
                        },
                    ],
                }}
                width={screenWidth - 40}
                height={220}
                chartConfig={{
                    backgroundColor: '#022173',
                    backgroundGradientFrom: '#1c2f4b',
                    backgroundGradientTo: '#1c2f4b',
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4CAF50',
        textAlign: 'center',
        marginBottom: 20,
    },
    subheader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555',
        marginBottom: 10,
    },
});

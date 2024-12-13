import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function DataHistoryScreen() {
    const [dataHistory, setDataHistory] = useState([
        { id: '1', title: 'Illegal Logging Detected', category: 'Warning', description: 'People seen logging illegally', date: '2024-12-01' },
        { id: '2', title: 'Pest Outbreak in Zone A', category: 'Critical', description: 'A Pest outbreak just occured in Zone A', date: '2024-12-02' },
        { id: '3', title: 'Forest Fire Contained', category: 'Resolved', description: 'A Forest Fire has just been contained', date: '2024-12-03' },
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Data History</Text>
            <FlatList
                data={dataHistory}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>Category: {item.category}</Text>
                        <Text>Description: {item.description}</Text>
                        <Text>Date: {item.date}</Text>
                    </View>
                )}
            />
        </View>
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
        marginBottom: 20,
        color: '#4CAF50',
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

import React, { useState } from 'react';
import { ScrollView, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { dataHistory, alerts } from './sharedState';

export default function DataInputScreen() {
    const navigation = useNavigation();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('General');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        if (!title.trim()) {
            Alert.alert('Validation Error', 'Title is required!');
            return;
        }

        const newData = {
            id: `${dataHistory.length + 1}`,
            title,
            category,
            description,
            date: new Date().toISOString().split('T')[0],
        };

        // Add newData to dataHistory
        dataHistory.push(newData);

        // Add to alerts if Critical or Warning
        if (category === 'Critical' || category === 'Warning') {
            alerts.push({ ...newData, status: category });
        }

        Alert.alert('Success', 'Data submitted successfully!');

        setTitle('');
        setCategory('General');
        setDescription('');

        navigation.navigate('dataHistory'); // Navigate to Data History tab
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Add New Data</Text>

        <Text style={styles.label}>Title</Text>
            <TextInput
                style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 10,
                    marginBottom: 15,
                }}
                placeholder="Enter a title"
                value={title}
                onChangeText={(text) => {
                    setTitle(text);
                }}
            />

        <Text style={styles.label}>Category</Text>
            <Picker
                selectedValue={category}
                style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    marginBottom: 15,
                }}
                onValueChange={(itemValue) => {
                    setCategory(itemValue);
                }}
            >
                <Picker.Item label="General" value="General" />
                <Picker.Item label="Critical" value="Critical" />
                <Picker.Item label="Warning" value="Warning" />
            </Picker>



            <Text style={styles.label}>Description (Optional)</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Enter a description"
                value={description}
                onChangeText={setDescription}
                multiline={true}
                numberOfLines={4}
            />

            <Button title="Submit" onPress={handleSubmit} />
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
        marginBottom: 20,
        color: '#4CAF50',
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#555',
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    picker: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10, // Optional padding
    }, 
});

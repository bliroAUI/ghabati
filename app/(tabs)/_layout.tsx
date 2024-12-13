import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import MapScreen from './mapScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Colors from '@/constants/Colors';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#fff', // Optional: Tab bar background color
                    justifyContent: 'center', // Centers the items vertically
                    alignItems: 'center', // Centers the items horizontally
                    paddingBottom: 5, // Add padding for spacing
                    paddingTop: 5, // Add padding for spacing
                    height: 60, // Adjust height for proper alignment
                },
                tabBarLabelStyle: {
                    fontSize: 12, // Adjust label size
                    fontWeight: '600', // Make label bold
                    textAlign: 'center', // Align text to center
                },
                tabBarIconStyle: {
                    justifyContent: 'center', // Center icons
                    alignItems: 'center', // Center icons
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({ color }) => <FontAwesome name="tree" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="alerts"
                options={{
                    title: 'Alerts',
                    tabBarIcon: ({ color }) => <FontAwesome name="exclamation-circle" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="newDataInput"
                options={{
                    title: 'Data Input',
                    tabBarIcon: ({ color }) => <FontAwesome name="pencil" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="analytics"
                options={{
                    title: 'Analytics',
                    tabBarIcon: ({ color }) => <FontAwesome name="bar-chart" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="data"
                options={{
                    tabBarButton: () => null, // Hides the tab
                }}
            />
            <Tabs.Screen
                name="dataHistory"
                options={{
                    tabBarButton: () => null, // Hides the tab
                }}
            />
            <Tabs.Screen
              name="mapScreen"
              options={{
                title: "Map",
                tabBarIcon: ({ color }) => <FontAwesome name="map" size={24} color={color} />,
              }}
            />

        </Tabs>
        
    );
}

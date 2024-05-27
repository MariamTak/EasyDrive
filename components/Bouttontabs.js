import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../ecrans/login';

const Tab = createMaterialBottomTabNavigator();

const BouttonTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Inscriptionhome"
            activeColor="grey"
            shifting={false} // Ajouté pour afficher les labels sous les icônes
            barStyle={{ backgroundColor: 'white', height: 70 }} // Modifié pour la couleur et la hauteur
        >
            <Tab.Screen
                name="Propriétaire"
                component={LoginScreen}
                options={{
                    tabBarLabel: 'Propriétaire',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="car-back" color={'black'} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Location"
                component={LoginScreen}
                options={{
                    tabBarLabel: 'Location',
                    tabBarIcon: ({ color }) => (
                        <Icons name="search-sharp" color={'black'} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Compte"
                component={LoginScreen}
                options={{
                    tabBarLabel: 'Compte',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={'black'} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BouttonTabs;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Telas
import EscudoScreen from './Screens/EscudoScreen';
import PersonagensScreen from './Screens/PersonagensScreen';
import DragonsScreen from './Screens/DragonsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Escudo':
                  iconName = 'shield-outline';
                  break;
                case 'Personagens':
                  iconName = 'people-outline';
                  break;
                case 'Dragons':
                  iconName = 'trophy-outline';
                  break;
               
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#e50914',
            tabBarInactiveTintColor: 'gray',
            headerTitleAlign: 'center',
          })}
        >
          <Tab.Screen
            name="Escudo"
            component={EscudoScreen}
            options={{ title: 'House Targaryen' }}
          />
          <Tab.Screen
            name="Personagens"
            component={PersonagensScreen}
            options={{ title: 'Personagens' }}
          />
          <Tab.Screen
            name="Dragons"
            component={DragonsScreen}
            options={{ title: 'Dragons' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

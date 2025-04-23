import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CopaScreen from './Screens/CopaScreens';
import EstadioScreens from './Screens/EstadioScreens';
import BrasilScreens from './Screens/BrasilScreens';
import EstatisticasScreen from './Screens/EstatisticasScreen';


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
                case 'Copa':
                  iconName = 'shield-outline';
                  break;
                case 'Estadio':
                  iconName = 'people-outline';
                  break;
                case 'Brasil':
                  iconName = 'trophy-outline';
                  break;
                case 'Estatisticas':
                  iconName = 'bar-chart-outline';
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
            name="Copa"
            component={CopaScreen}
            options={{ title: 'Copa 2022' }}
          />
          <Tab.Screen
            name="Estadio"
            component={EstadioScreens}
            options={{ title: 'Estadios' }}
          />
           <Tab.Screen
            name="Brasil"
            component={BrasilScreens}
            options={{ title: 'Brasil' }}
          />
           <Tab.Screen
            name="Estatisticas"
            component={EstatisticasScreen}
            options={{ title: 'Estatiticas' }}
          />
         
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

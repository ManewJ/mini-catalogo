import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../screens/Perfil';
import StackRoutes from './StackRoutes';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1A1A2E',
          borderTopColor: '#FF6B35',
          borderTopWidth: 2,
          paddingBottom: 6,
          paddingTop: 6,
          height: 60,
        },
        tabBarActiveTintColor: '#FF6B35',
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Catálogo') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Catálogo" component={StackRoutes} />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#1A1A2E' },
          headerTitleStyle: { color: '#FFF' },
          title: '👤 Meu Perfil',
        }}
      />
    </Tab.Navigator>
  );
}
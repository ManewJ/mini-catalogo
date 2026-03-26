import { createStackNavigator } from '@react-navigation/stack';
import DetalhesProduto from '../screens/DetalhesProduto';
import ListaProdutos from '../screens/ListaProdutos';

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1A1A2E' },
        headerTintColor: '#FF6B35',
        headerTitleStyle: { fontWeight: 'bold', color: '#FFFFFF' },
      }}
    >
      <Stack.Screen
        name="ListaProdutos"
        component={ListaProdutos}
        options={{ title: '🛒 Catálogo Fitness' }}
      />
      <Stack.Screen
        name="DetalhesProduto"
        component={DetalhesProduto}
        options={{ title: 'Detalhes do Produto' }}
      />
    </Stack.Navigator>
  );
}
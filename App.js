import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import TabRoutes from './src/routes/TabRoutes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <TabRoutes />
    </NavigationContainer>
  );
}

export default App;
registerRootComponent(App);
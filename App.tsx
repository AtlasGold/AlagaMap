import Mapa  from './src/mapa';
import Reporte from './src/reporte';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mapa">
        <Stack.Screen name="Mapa" component={Mapa} />
        <Stack.Screen name="Reporte" component={Reporte} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// export default function App() {
//   return (
//     <Mapa/>
//   );
// }


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TiposEntrada from './TiposEntradas';
import LoginOutros from './LoginOutros';
import LoginPin from './LoginPin';
import AreaLogadaTabs from './AreaLogadaTabs';


const Routes = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Routes.Navigator initialRouteName="TiposEntrada" screenOptions={{ headerShown: false }}>
        <Routes.Screen name="TiposEntrada" component={TiposEntrada}/>
        <Routes.Screen name="LoginOutros" component={LoginOutros}/>
        <Routes.Screen name="LoginPin" component={LoginPin}/>
        <Routes.Screen name="AreaLogadaTabs" component={AreaLogadaTabs}/>
      </Routes.Navigator>
    </NavigationContainer>
  );
}
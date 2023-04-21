import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes'
import HomeScreen from '../screens/Home';
import ProductDetailScreen from '../screens/Detail';

const { Navigator, Screen } = createNativeStackNavigator();

function RootNavigator() {
    return (
      <Navigator initialRouteName={routes.home} screenOptions={{ headerShown: false }}>
        <Screen name={routes.home} component={HomeScreen} />
        <Screen name={routes.detail} component={ProductDetailScreen} />
      </Navigator>
    );
  }

  export default RootNavigator;

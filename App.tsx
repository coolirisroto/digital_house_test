import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/router';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Avenir-Light': require('./src/assets/fonts/Avenir-Light.ttf'),
    'Avenir-Regular': require('./src/assets/fonts/Avenir-Regular.ttf'),
    'Avenir-Book': require('./src/assets/fonts/Avenir-Book.ttf'),
    'Avenir-Black': require('./src/assets/fonts/Avenir-Black.ttf'),
    'Avenir-Heavy': require('./src/assets/fonts/Avenir-Heavy.ttf'),
  });

  if(!fontsLoaded) return

  return (
    <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
  );
}
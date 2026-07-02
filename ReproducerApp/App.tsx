/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, TextInput, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ flex: 1, marginTop: '300', alignItems: 'center' }}>
        <TextInput placeholder={'placeHolder'} keyboardType="numeric" />
      </View>
    </SafeAreaProvider>
  );
}

export default App;

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Game } from 'src/screens/Game'
import { Home } from 'src/screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="home" component={Home} />
    <Screen name="game" component={Game} />
  </Navigator>
)

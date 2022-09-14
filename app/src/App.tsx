import React from 'react'
import { StatusBar } from 'react-native'

import { Background } from 'src/components'

import { Home } from './screens/Home'

export function App() {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Home />
    </Background>
  )
}

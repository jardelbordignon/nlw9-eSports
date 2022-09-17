/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Background } from 'src/components'

import { Routes } from './routes'

export function App() {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </Background>
  )
}

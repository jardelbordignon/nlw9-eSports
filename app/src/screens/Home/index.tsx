import React from 'react'
import { FlatList, Image, View } from 'react-native'

import logoImg from 'src/assets/logo-nlw-esports.png'
import { GameCard, Heading } from 'src/components'
import { GAMES } from 'src/utils/games'

import s from './styles'

export function Home() {
  return (
    <View style={s.box}>
      <Image source={logoImg} style={s.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        horizontal
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.contentList}
      />
    </View>
  )
}

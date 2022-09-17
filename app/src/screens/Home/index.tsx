import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { FlatList, Image, View } from 'react-native'

import logoImg from 'src/assets/logo-nlw-esports.png'
import { Background, GameCard, Heading } from 'src/components'
import type { GameType } from 'src/types/games'

import s from './styles'

export function Home() {
  const [games, setGames] = useState<GameType[]>([])
  const { navigate } = useNavigation()

  useEffect(() => {
    fetch('http://192.168.0.107:3000/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
      <View style={s.box}>
        <Image source={logoImg} style={s.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          horizontal
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item: game }) => (
            <GameCard data={game} onPress={() => navigate('game', game)} />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={s.contentList}
        />
      </View>
    </Background>
  )
}

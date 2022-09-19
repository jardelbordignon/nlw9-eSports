import { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import logoImg from 'src/assets/logo-nlw-esports.png'
import { Background, DuoCard, DuoMatchModal, Heading } from 'src/components'
import { THEME } from 'src/theme'
import { DuoType } from 'src/types/games'
import { GameNavProps } from 'src/types/navigation'

import s from './styles'

export function Game({ route, navigation }: GameNavProps) {
  const { id, bannerUrl, title } = route.params

  const [duos, setDuos] = useState<DuoType[]>([])
  const [discordDuoSelected, setDiscordDuoSelected] = useState('')

  useEffect(() => {
    fetch(`http://192.168.0.107:3000/games/${id}/ads`)
      .then(res => res.json())
      .then(data => setDuos(data))
  }, [id])

  const getDiscordUser = async (adsId: string) => {
    fetch(`http://192.168.0.107:3000/ads/${adsId}/discord`)
      .then(res => res.json())
      .then(data => setDiscordDuoSelected(data.discord))
  }

  const listEmptyComponent = () => (
    <Text style={s.emptyContentText}>Não há anúncios publicados ainda</Text>
  )

  return (
    <Background>
      <View style={s.box}>
        <View style={s.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon
              name="chevron-left"
              size={32}
              color={THEME.COLORS.CAPTION_300}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={s.logo} />

          <View style={s.right} />
        </View>

        <Image source={{ uri: bannerUrl }} style={s.cover} resizeMode="cover" />

        <Heading title={title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
          )}
          ListEmptyComponent={listEmptyComponent}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={s.boxList}
          contentContainerStyle={duos.length ? s.contentList : s.emptyContent}
        />
      </View>

      <DuoMatchModal
        discord={discordDuoSelected}
        visible={discordDuoSelected !== ''}
        onClose={() => setDiscordDuoSelected('')}
      />
    </Background>
  )
}

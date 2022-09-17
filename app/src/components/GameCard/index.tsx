import { ImageBackground, Text, TouchableOpacity } from 'react-native'
import type { TouchableOpacityProps } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { THEME } from 'src/theme'
import { GameType } from 'src/types/games'

import s from './styles'

type Props = TouchableOpacityProps & {
  data: GameType
}

export function GameCard({ data, ...r }: Props) {
  const {
    title,
    bannerUrl,
    _count: { ads },
  } = data

  return (
    <TouchableOpacity style={s.box} {...r}>
      <ImageBackground source={{ uri: bannerUrl }} style={s.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={s.footer}>
          <Text style={s.name}>{title}</Text>
          <Text style={s.ads}>{ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}

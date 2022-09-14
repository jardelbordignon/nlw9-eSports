import { ImageBackground, Text, TouchableOpacity } from 'react-native'
import type { ImageSourcePropType, TouchableOpacityProps } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { THEME } from 'src/theme'

import s from './styles'

export type GameCardType = {
  id: string
  name: string
  ads: string
  cover: ImageSourcePropType
}

type Props = TouchableOpacityProps & {
  data: GameCardType
}

export function GameCard({ data, ...r }: Props) {
  return (
    <TouchableOpacity style={s.box} {...r}>
      <ImageBackground source={data.cover} style={s.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={s.footer}>
          <Text style={s.name}>{data.name}</Text>
          <Text style={s.ads}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}

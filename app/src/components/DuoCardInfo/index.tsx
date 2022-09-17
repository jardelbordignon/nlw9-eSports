import { Text, View } from 'react-native'

import { ColorKeys, THEME } from 'src/theme'

import s from './styles'

type Props = {
  label: string
  value: string
  color?: ColorKeys
}

export function DuoCardInfo({ label, value, color = 'CAPTION_300' }: Props) {
  return (
    <View style={s.box}>
      <Text style={s.label}>{label}</Text>
      <Text style={[s.value, { color: THEME.COLORS[color] }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  )
}

import { ActivityIndicator, View } from 'react-native'
import type { ActivityIndicatorProps } from 'react-native'

import { type ColorKeys, THEME } from 'src/theme'

import s from './styles'

type Props = ActivityIndicatorProps & {
  color?: ColorKeys
}

export function Loading({ color = 'PRIMARY', ...props }: Props) {
  return (
    <View style={s.box}>
      <ActivityIndicator color={THEME.COLORS[color]} {...props} />
    </View>
  )
}

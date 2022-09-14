import { Text, View } from 'react-native'
import type { ViewProps } from 'react-native'

import s from './styles'

type Props = ViewProps & {
  title: string
  subtitle: string
}

export function Heading({ title, subtitle, ...r }: Props) {
  return (
    <View style={s.box} {...r}>
      <Text style={s.title}>{title}</Text>
      <Text style={s.subtitle}>{subtitle}</Text>
    </View>
  )
}

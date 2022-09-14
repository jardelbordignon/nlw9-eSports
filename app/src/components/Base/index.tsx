import { Text, View } from 'react-native'

import s from './styles'

export function Base() {
  return (
    <View style={s.box}>
      <Text style={s.txt}>Base</Text>
    </View>
  )
}

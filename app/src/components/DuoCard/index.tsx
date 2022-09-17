import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { DuoCardInfo } from '../DuoCardInfo'

import { THEME } from 'src/theme'
import { DuoType } from 'src/types/games'

import s from './styles'

type Props = {
  data: DuoType
  onConnect: () => void
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={s.box}>
      <DuoCardInfo label="Nome" value={data.name} />
      <DuoCardInfo label="Tempo de jogo" value={`${data.yearsPlaying} anos`} />
      <DuoCardInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoCardInfo
        label="Chamada de áudio"
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        color={data.useVoiceChannel ? 'SUCCESS' : 'ALERT'}
      />

      <TouchableOpacity onPress={onConnect} style={s.button}>
        <Icon name="controller-classic" size={24} color={THEME.COLORS.TEXT} />
        <Text style={s.buttonText}>Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}

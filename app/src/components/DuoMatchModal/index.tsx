import Clipboard from '@react-native-clipboard/clipboard'
import {
  Alert,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Heading } from '../Heading'

import { THEME } from 'src/theme'

import s from './styles'

type Props = ModalProps & {
  discord: string
  onClose(): void
}

export function DuoMatchModal({ discord, onClose, ...r }: Props) {
  const handleCopyDiscordToClipboard = async () => {
    Clipboard.setString(discord)

    Clipboard.getString().then(str => {
      Alert.alert(
        'Discord Copiado!',
        str + ' copiado para você colar no Discord'
      )
    })
  }

  return (
    <Modal {...r} transparent statusBarTranslucent animationType="fade">
      <View style={s.box}>
        <View style={s.content}>
          <View style={s.header}>
            <View style={s.leftSpace} />
            <Icon name="check-circle" size={64} color={THEME.COLORS.SUCCESS} />
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color={THEME.COLORS.CAPTION_500} />
            </TouchableOpacity>
          </View>

          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jojgar!"
            style={{ alignItems: 'center', marginVertical: 24 }}
          />

          <Text style={s.label}>Adicione no Discord</Text>

          <TouchableOpacity
            onPress={handleCopyDiscordToClipboard}
            style={s.discordBtn}>
            <Text style={s.discordBtnTxt}>{discord}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

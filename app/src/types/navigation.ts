import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { GameType } from './games'

export type AppParamList = {
  home: undefined
  game: GameType
}

export type HomeNavProps = NativeStackScreenProps<AppParamList, 'home'>
export type GameNavProps = NativeStackScreenProps<AppParamList, 'game'>

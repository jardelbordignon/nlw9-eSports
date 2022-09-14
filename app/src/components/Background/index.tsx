import type { ReactNode } from 'react'
import { ImageBackground, type ImageBackgroundProps } from 'react-native'

import bgImg from 'src/assets/background-galaxy.png'

import s from './styles'

type Props = Omit<ImageBackgroundProps, 'source'> & {
  children: ReactNode
}

export function Background({ children, ...r }: Props) {
  return (
    <ImageBackground source={bgImg} defaultSource={bgImg} style={s.box} {...r}>
      {children}
    </ImageBackground>
  )
}

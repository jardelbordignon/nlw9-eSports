export type GameType = {
  id: string
  title: string
  bannerUrl: string
  _count: { ads: number }
}

export type DuoType = {
  id: string
  hourEnd: string
  hourStart: string
  name: string
  useVoiceChannel: boolean
  weekDays: string[]
  yearsPlaying: number
}

import type { GameType } from "../types/games"

type Props = {
  data: GameType
}

export function GameBanner({ data }: Props) {
  const { title, bannerUrl, _count: { ads } } = data
  return(
    <a href="" className='relative rounded-lg overflow-hidden'>
      <img src={bannerUrl} alt={title} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className='font-bold text-white'>{title}</strong>
        <span className='text-zinc-300 text-sm block'>{ads} anúncio{ads > 1 ? 's' : ''}</span>
      </div>
    </a>
  )
}
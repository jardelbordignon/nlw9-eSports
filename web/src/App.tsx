import { useEffect, useState } from 'react'
import { GameController } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import LogoImg from './assets/logo.svg'
import { CreateAdBanner, CreateAdModal, GameBanner } from './components'
import type { GameType } from './types/games'

import './styles/main.css'

export function App() {
  const [games, setGames] = useState<GameType[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])

  return (
    <div className='flex flex-col items-center max-w-[1344px] mx-auto my-20'>
      <img src={LogoImg} alt='Logo eSports' />

      <h1 className='text-6xl font-black text-white mt-20'>
        Seu <span className='bg-gradient text-transparent bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='flex gap-6 mt-16'>
        {games.map((game) => <GameBanner key={game.id} data={game} /> )}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

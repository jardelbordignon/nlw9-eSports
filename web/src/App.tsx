import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css'

import LogoImg from './assets/logo.svg'

const games = [
  'League of Legends', 
  'Dota 2', 
  'Counter Strike', 
  'World of Warcraft',
  'Apex Legends', 
  'Fortnite', 
]

export function App() {
  return (
    <div className='flex flex-col items-center max-w-[1344px] mx-auto my-20'>
      <img src={LogoImg} alt="Logo eSports" />

      <h1 className='text-6xl font-black text-white mt-20'>
        Seu <span className='bg-gradient text-transparent bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className="flex gap-6 mt-16">
        {games.map((game, index) => (
          <a key={index} href="" className='relative rounded-lg overflow-hidden'>
            <img src={`/games/${++index}.png`} alt={`Game ${++index}`} />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className='font-bold text-white'>{game}</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
        ))}
      </div>

      <div className='pt-1 mt-8 bg-gradient self-stretch rounded-lg overflow-hidden'> 
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar novos players</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}
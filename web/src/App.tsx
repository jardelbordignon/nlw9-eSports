import { useEffect, useState } from 'react'
import { GameController } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import LogoImg from './assets/logo.svg'
import { Input } from './components/form/Input'
import { CreateAdBanner, GameBanner } from './components'
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

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
          <Dialog.Content className='bg-[#2A2634] fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg min-w-[480px] shadow-xl'>
            <Dialog.Title className='text-3xl font-extrabold'>Publique um anúncio</Dialog.Title>
       
            <form className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='game'>Qual o game?</label>
                <Input 
                  id='game' 
                  placeholder='Selecione o game que deseja jogar' 
                  className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
                />
              </div>
              
              <div className='flex flex-col gap-2'>
                <label htmlFor='game'>Qual seu nome (ou nickname)</label>
                <Input 
                  id='game' 
                  placeholder='Como te chamam dentro do game?'
                  className='bg-zinc-900'
                />
              </div>

              <div className='flex gap-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='yearsPlaying'>Joga a quantos anos?</label>
                  <Input type='number' id='yearsPlaying' placeholder='Tudo bem ser ZERO' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='discord'>Qual seu discord?</label>
                  <Input id='discord' placeholder='Usuario#0000' />
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='weekDays'>Quando costuma jogar?</label>
                  <div className='flex gap-1'>
                    <button 
                      title='Domingo'
                      className='w-7 h-9 rounded bg-zinc-900'
                    >
                      D
                    </button>
                    <button 
                      title='Segunda'
                      className='w-7 h-9 rounded bg-zinc-900'
                    >
                      S
                    </button>
                    <button 
                      title='Terça'
                      className='w-7 h-9 rounded bg-zinc-900'
                    >
                      T
                    </button>
                    <button 
                      title='Quarta'
                      className='w-7 h-9 rounded bg-zinc-900'
                    >
                      Q
                    </button>
                    <button 
                      title='Quinta'
                      className='w-7 h-9 rounded bg-zinc-900'
                    >
                      Q
                    </button>
                    <button 
                      title='Sexta'
                      className='w-7 h-9 rounded bg-zinc-900'
                    >
                      S
                    </button>
                    <button 
                      title='Sábado'
                      className='w-7 h-9 rounded bg-zinc-900'
                    >
                      S
                    </button>
                  </div>
                </div>
                
                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor='hourStart'>Qual horário costuma jogar?</label>
                  <div className='flex gap-2'>
                    <Input type='time' id='hourStart' placeholder='Das' />
                    <Input type='time' id='hourEnd' placeholder='às' />
                  </div>
                </div>
              </div>

              <div className='flex gap-2 mt-2 text-sm'>
                <Input type='checkbox' id='' />
                Constumo me conectar ao chat de voz
              </div>

              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold'>
                  Cancelar
                </Dialog.Close>
                <button 
                  type='submit' 
                  className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex gap-3 items-center'
                >
                  <GameController size={24} />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

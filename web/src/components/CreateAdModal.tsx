import * as Checkbox from '@radix-ui/react-checkbox'
import * as Dialog from "@radix-ui/react-dialog"
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Check, GameController } from "phosphor-react"
import axios from 'axios'

import { Input } from "./form"
import { useEffect, useState, FormEvent } from "react"
import type { GameType } from "../types/games"

export function CreateAdModal() {
  const [games, setGames] = useState<GameType[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(true)

  useEffect(() => {
    axios('http://localhost:3000/games')
      .then(res => setGames(res.data))
  }, [])

  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if (!data.name) return

    try {
      await axios.post(`http://localhost:3000/games/${data.game}/ads`, {
        name: data.name,
        discord: data.discord,
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        yearsPlaying: Number(data.yearsPlaying),
        weekDays: weekDays.map(Number),
        useVoiceChannel
      })

      alert('Anúncio criado com sucesso')
    } catch (error) {
      console.log(error)      
      alert('Erro ao criar o anúncio')
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
      <Dialog.Content className='bg-[#2A2634] fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg min-w-[480px] shadow-xl'>
        <Dialog.Title className='text-3xl font-extrabold'>Publique um anúncio</Dialog.Title>
    
        <form className='mt-8 flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2'>
            <label htmlFor='game'>Qual o game?</label>
            <select
              id='game'
              name='game'
              className="form-select appearance-none bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 block w-full bg-clip-padding transition ease-in-out" 
              aria-label="Select duo"
            >
              <option disabled selected>Selecione...</option>
              {games.map(game => (<option key={game.id} value={game.id}>{game.title}</option>))}
            </select>
          </div>
          
          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Qual seu nome (ou nickname)</label>
            <Input 
              id='name'
              name='name'
              placeholder='Como te chamam dentro do game?'
              className='bg-zinc-900'
            />
          </div>

          <div className='flex gap-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='yearsPlaying'>Joga a quantos anos?</label>
              <Input type='number' id='yearsPlaying' name='yearsPlaying' placeholder='Tudo bem ser ZERO' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='discord'>Qual seu discord?</label>
              <Input id='discord' name='discord' placeholder='Usuario#0000' />
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='weekDays'>Quando costuma jogar?</label>
              <ToggleGroup.Root 
                type='multiple'
                className='flex gap-1'
                onValueChange={setWeekDays}
                value={weekDays} 
              >
                { daysOfWeek.map((day, index) => (
                  <ToggleGroup.Item
                    value={index.toString()} 
                    title={day}
                    className={`w-8 h-9 rounded ${weekDays.includes(index.toString()) ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    {day.charAt(0)}
                  </ToggleGroup.Item>
                )) }
              </ToggleGroup.Root>
            </div>
            
            <div className='flex flex-col gap-2 flex-1'>
              <label htmlFor='hourStart'>Qual horário costuma jogar?</label>
              <div className='flex gap-2'>
                <Input type='time' id='hourStart' name='hourStart' placeholder='Das' />
                <Input type='time' id='hourEnd' name='hourEnd' placeholder='às' />
              </div>
            </div>
          </div>

          <label className='flex gap-2 mt-2 text-sm'>
            <Checkbox.Root
              checked={useVoiceChannel}
              onCheckedChange={() => setUseVoiceChannel(!useVoiceChannel)}
              className="w-6 h-6 p-1 rounded bg-zinc-900"
            >
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Constumo me conectar ao chat de voz
          </label>

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
  )
}

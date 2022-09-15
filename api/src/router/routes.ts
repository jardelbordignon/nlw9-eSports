import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { convertMinutesToHourString, convertHourStringToMinutes } from 'src/utils/time-conversions'

const routes = Router()
const prisma = new PrismaClient({
  log: ['query']
})

routes.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })
  return res.json(games)
})

routes.post('/games/:id/ads', async (req, res) => {
  const { id: gameId } = req.params
  const { body } = req

  const ad = await prisma.ad.create({ 
    data: { 
      gameId, 
      ...body,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
    }
  })

  return res.status(201).json(ad)
})

routes.get('/games/:id/ads', async (req, res) => {
  const { id } = req.params

  const ads = await prisma.ad.findMany({ 
    where: { gameId: id },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      hourEnd: true,
      hourStart: true,
      name: true,
      useVoiceChannel: true,
      weekDays: true,
      yearsPlaying: true,
    }
  })
  
  return res.json(ads.map(ad => ({
    ...ad,
    weekDays: ad.weekDays.split(','),
    hourStart: convertMinutesToHourString(ad.hourStart),
    hourEnd: convertMinutesToHourString(ad.hourEnd),
  })))
})

routes.get('/ads/:id/discord', async (req, res) => {
  const { id } = req.params

  const { discord } = await prisma.ad.findUnique({
    where: { id },
    select: { discord: true },
  })

  return res.json({ discord })
})

export { routes }
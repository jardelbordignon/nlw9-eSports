import { Router } from 'express'

const routes = Router()

routes.get('/ads', (req, res) => {
  return res.json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' },
  ])
})

export { routes }
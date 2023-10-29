import { Router } from 'express'

const router = Router();

router.get('/', (req, res) => {
  return res.send('Olá Dev!')
})

router.post('/teste', (req, res) => {
  return res.send('testando o Insomnia!')
})



export { router }
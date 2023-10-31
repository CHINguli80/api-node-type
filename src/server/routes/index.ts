import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

const router = Router();

router.get('/', (req, res) => {
  return res.status(StatusCodes.OK).send('Olá Dev!')
})

router.post('/teste', (req, res) => {
  return res.send('testando o Insomnia!')
})



export { router }
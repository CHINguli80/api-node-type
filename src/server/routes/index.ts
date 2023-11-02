import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { CidadeController } from './../controllers'

const router = Router();

router.get('/', (req, res) => {
  return res.status(StatusCodes.OK).send('Olá Dev!')
})

router.get('/citys', CidadeController.getAllValidation, CidadeController.getAll)
router.get('/citys/:id', CidadeController.getIdValidation, CidadeController.getByID)
router.post('/citys', CidadeController.createValidation , CidadeController.create)
router.put('/citys/:id', CidadeController.updateValidation , CidadeController.updateById)
router.delete('/citys/:id', CidadeController.deleteValidation, CidadeController.deleteById)


export { router }
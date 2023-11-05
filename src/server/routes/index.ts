import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { CidadeController, PersonsController } from './../controllers'

const router = Router();

router.get('/', (req, res) => {
  return res.status(StatusCodes.OK).send('Olá Dev!')
})

// router -- Citys
router.get('/citys', CidadeController.getAllValidation, CidadeController.getAll)
router.get('/citys/:id', CidadeController.getIdValidation, CidadeController.getByID)
router.post('/citys', CidadeController.createValidation , CidadeController.create)
router.put('/citys/:id', CidadeController.updateValidation , CidadeController.updateById)
router.delete('/citys/:id', CidadeController.deleteValidation, CidadeController.deleteById)

// router --- Persons
router.get('/persons', PersonsController.getAllValidation, PersonsController.getAll)
router.get('/persons/:id', PersonsController.getByValidation, PersonsController.getById)
router.post('/persons', PersonsController.createValidation, PersonsController.create)
router.put('/persons/:id', PersonsController.updateValidation, PersonsController.update)
router.delete('/persons/:id', PersonsController.deleteValidation, PersonsController.deleteById)

export { router }
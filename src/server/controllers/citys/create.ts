import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares'


interface Icity {
  name: string
}

const bodyValidation: yup.ObjectSchema<Icity> = yup.object().shape({
  name: yup.string().required().min(3)
})

export const createValidation = validation({
  body: bodyValidation
})

export const create = async (req: Request<{}, {}, Icity>, res: Response) => {



  console.log(req.body)

  return res.status(StatusCodes.CREATED).json(1)
}

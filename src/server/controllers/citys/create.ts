import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares'


interface Icity {
  name: string,
  state: string
}

interface Filter {
  filter?: string
}

const bodyValidation: yup.ObjectSchema<Icity> = yup.object().shape({
  name: yup.string().required().min(3),
  state: yup.string().required().min(3)
})

const queryFilter: yup.ObjectSchema<Filter> = yup.object().shape({
  filter: yup.string().required().min(3)
})


export const createValidation = validation({
  body: bodyValidation,
  query: queryFilter
})

export const create = async (req: Request<{}, {}, Icity>, res: Response) => {



  console.log(req.body)

  return res.send('Create')
}
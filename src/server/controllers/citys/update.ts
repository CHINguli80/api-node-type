import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares'


interface IParamsProps {
  id?: number,
}

interface IBodyprops {
  name: string
}

const IdProps: yup.ObjectSchema<IParamsProps> = yup.object().shape({
  id: yup.number().integer().required().moreThan(0)
})

const BodyProps: yup.ObjectSchema<IBodyprops> = yup.object().shape({
  name: yup.string().required().min(3)
})

export const updateValidation = validation({
  body: BodyProps,
  params: IdProps
})

export const updateById = async(req: Request<IParamsProps, {}, IBodyprops>, res: Response) => {
  console.log(req.params)
  console.log(req.body)

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implemetado!')
}

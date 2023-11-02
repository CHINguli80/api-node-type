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
  
  if(Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não encontrado'
    }
  })

  return res.status(StatusCodes.NO_CONTENT).send()
}

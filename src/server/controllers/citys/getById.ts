import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares'

interface IParamsProps {
  id?: number,
}

const queryParams: yup.ObjectSchema<IParamsProps> = yup.object().shape({
  id: yup.number().integer().required().moreThan(0),
})

export const getIdValidation = validation({
  params: queryParams
})

export const getByID = async (req: Request<IParamsProps>, res: Response) => {
  
  if(Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não encontrado'
    }
  })

  return res.status(StatusCodes.OK).json({
    id: req.params.id,
    name: 'Almada'
  })
}
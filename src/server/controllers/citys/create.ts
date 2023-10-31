import { Request, Response } from 'express'


interface Icity {
  name: string
}

export const create = (req: Request<{}, {}, Icity>, res: Response) => {
 
  console.log(req.body)

  return res.send('Create')
}

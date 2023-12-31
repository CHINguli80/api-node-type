import { ETableNames } from '../../ETableNames'
import { Knex } from '../../knex'
import { ICity } from '../../models'


export const getAll = async (page: number, limit: number, filter: string, id: Number): Promise<ICity[] | Error> => {
  try {
    const result = await Knex(ETableNames.citys).select('*')
    .where('id', '=', id)
    .orWhere('name', 'like', `%${filter}%`)
    .offset((page -1) * limit).limit(limit)
    
    
    if(Number(id) > 0 && result.every(item => item.id !== id)) {
      const resultById = await Knex(ETableNames.citys)
      .select('*').where('id', '=', id).first()

      if(resultById) return [...result, resultById]
    }

    return result
  } catch (error) {
    console.log(error)
    return new Error('Erro ao consultar os registros')
  }
}
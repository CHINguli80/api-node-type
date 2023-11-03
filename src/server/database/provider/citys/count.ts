import { ETableNames } from "../../ETableNames"
import { Knex } from "../../knex"



export const count = async (filter = ''): Promise<Number | Error> => {
  try {
    const [ count ] = await Knex(ETableNames.citys)
    .where('name', 'like', `%${filter}%`)
    .count<[{ count: number }]>('* as count')

    if(Number.isInteger(count)) return Number(count)
    
    return new Error('Erro ao consultar a quantidade total de registros')
  } catch (error) {
    console.log(error)
    return new Error('Erro ao consultar a quantidade total de registro')
  }
}
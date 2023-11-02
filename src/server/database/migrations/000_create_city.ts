import { Knex } from 'knex'
import { ETableNames } from '../ETableNames'

export async function up(knex: Knex) {
  
  return knex.schema.createTable('citys', table => {
    table.bigIncrements('id').primary().index()
    table.string(ETableNames.citys, 150).index().notNullable()

    table.comment('Tabela usada para armazenar cidades da tabela')
  }).then(() => {
    console.log(`# Created table ${ETableNames.citys}`)
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.citys)
  .then(() => {
    console.log(`# Dropped table ${ETableNames.citys}`)
  })
}
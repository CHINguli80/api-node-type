import { ICity } from '../../models'

declare module 'knex/tupes/tables' {
  interface Tables {
     city: ICity
    // person: IPerson
    // user: IUser
  }
}
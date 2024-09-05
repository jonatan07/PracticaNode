import customer from './customer.json'
import { Customer, CustomerWithOutAge, NewCustomer } from '../types'
// Coleccion de datos a usar.
const customers: Customer[] = customer as Customer[]
const customers2: CustomerWithOutAge[] = customer as CustomerWithOutAge[]

// METODOS.
export const getEntries = (): Customer[] => customers

export const addEntry = (newCustomerDTO: NewCustomer): Customer | undefined => {
  const newCustomer = {
    Id: Math.max(...customers.map(c => c.Id)) + 1,
    CreatedAt: new Date().toString(),
    ...newCustomerDTO
  }

  customers.push(newCustomer)

  return newCustomer
}

export const getEntriesWithOut = (): CustomerWithOutAge[] => {
  return customers2.map(({ Id, Name, LastName, IsContractor, TypeCustomer, CreatedAt }) => {
    return {
      Id,
      Name,
      LastName,
      IsContractor,
      TypeCustomer,
      CreatedAt
    }
  })
}

export const findById = (id: number): Customer | undefined => {
  const customer = customers.find(c => c.Id === id)
  return customer
}

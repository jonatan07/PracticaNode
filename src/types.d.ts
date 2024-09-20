// interfaces
export interface Customer {
  Id: number
  Name: string
  LastName: string
  Age: number
  IsContractor: boolean
  TypeCustomer: TypeCustomer
  CreatedAt: String
}
// types
export type TypeCustomer = 'Administrativo | Temporal | Fijo | N/A'
export type CustomerWithOutWorkingDate = Pick<Customer, 'Id' | 'Name' | 'LastName' | 'Age'>
export type CustomerWithOutAge = Omit<Customer, 'Age'>
export type NewCustomer = Omit<Customer, 'Id' | 'CreatedAt'>

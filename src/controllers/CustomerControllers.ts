import express from 'express'
import * as customerServices from '../services/CustomerServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(customerServices.getEntriesWithOut())
})

router.get('/:id', (req, res) => {
  const customer = customerServices.findById(+req.params.id)
  return (customer != null)
    ? res.send(customer)
    : res.sendStatus(404)
})

router.get('/withoutage/:id', (req, res) => {
  const customer = customerServices.findById(+req.params.id)
  if (customer != null) {
    const { Age, ...c } = customer
    return res.send(c)
  }
  return res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const { Name, LastName, Age, IsContractor, TypeCustomer } = req.body
    const newCustomer = customerServices.addEntry({ Name, LastName, Age, IsContractor, TypeCustomer })
    res.json(newCustomer)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

router.put('/', (_req, _res) => {

})

router.delete('/', (_req, _res) => {

})

export default router

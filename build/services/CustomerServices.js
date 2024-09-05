"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.getEntriesWithOut = exports.addEntry = exports.getEntries = void 0;
const customer_json_1 = __importDefault(require("./customer.json"));
// Coleccion de datos a usar.
const customers = customer_json_1.default;
const customers2 = customer_json_1.default;
// METODOS.
const getEntries = () => customers;
exports.getEntries = getEntries;
const addEntry = (newCustomerDTO) => {
    const newCustomer = Object.assign({ Id: Math.max(...customers.map(c => c.Id)) + 1, CreatedAt: new Date().toString() }, newCustomerDTO);
    customers.push(newCustomer);
    return newCustomer;
};
exports.addEntry = addEntry;
const getEntriesWithOut = () => {
    return customers2.map(({ Id, Name, LastName, IsContractor, TypeCustomer, CreatedAt }) => {
        return {
            Id,
            Name,
            LastName,
            IsContractor,
            TypeCustomer,
            CreatedAt
        };
    });
};
exports.getEntriesWithOut = getEntriesWithOut;
const findById = (id) => {
    const customer = customers.find(c => c.Id === id);
    return customer;
};
exports.findById = findById;

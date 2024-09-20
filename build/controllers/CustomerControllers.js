"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customerServices = __importStar(require("../services/CustomerServices"));
const router = express_1.default.Router();
/**
 * @openapi
 * /:
 *   get:
 *     description: Obtiene una lista de clientes sin procesar
 *     responses:
 *       200:
 *         description: Lista de clientes sin procesar
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "John Doe"
 */
router.get('/', (_req, res) => {
    res.send(customerServices.getEntriesWithOut());
});
router.get('/:id', (req, res) => {
    const customer = customerServices.findById(+req.params.id);
    return (customer != null)
        ? res.send(customer)
        : res.sendStatus(404);
});
router.get('/withoutage/:id', (req, res) => {
    const customer = customerServices.findById(+req.params.id);
    if (customer != null) {
        const { Age } = customer, c = __rest(customer, ["Age"]);
        return res.send(c);
    }
    return res.sendStatus(404);
});
router.post('/', (req, res) => {
    try {
        const { Name, LastName, Age, IsContractor, TypeCustomer } = req.body;
        const newCustomer = customerServices.addEntry({ Name, LastName, Age, IsContractor, TypeCustomer });
        res.json(newCustomer);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
router.put('/', (_req, _res) => {
});
router.delete('/', (_req, _res) => {
});
exports.default = router;

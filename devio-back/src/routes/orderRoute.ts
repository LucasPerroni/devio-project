import { Router } from "express"

import { createOrder } from "../controllers/orderController.js"
import validateSchema from "../middlewares/validateSchema.js"

const orderRoute = Router()

orderRoute.post("/order", createOrder)

export default orderRoute

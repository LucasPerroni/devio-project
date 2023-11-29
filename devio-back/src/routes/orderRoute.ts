import { Router } from "express"

import { createOrder, getLatestCode } from "../controllers/orderController.js"
import validateSchema from "../middlewares/validateSchema.js"
import { orderSchema } from "../schema/orderSchema.js"

const orderRoute = Router()

orderRoute.get("/order/code/latest", getLatestCode)
orderRoute.post("/order", validateSchema(orderSchema), createOrder)

export default orderRoute

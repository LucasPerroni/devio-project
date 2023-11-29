import { Router } from "express"

import { createOrder, getLatestCode, getUsers, updateOrder } from "../controllers/orderController.js"
import validateSchema from "../middlewares/validateSchema.js"
import { orderSchema } from "../schema/orderSchema.js"
import { updateOrderSchema } from "../schema/updateOrderSchema.js"

const orderRoute = Router()

orderRoute.get("/order/code/latest", getLatestCode)
orderRoute.post("/order", validateSchema(orderSchema), createOrder)
orderRoute.get("/user", getUsers)
orderRoute.put("/order", validateSchema(updateOrderSchema), updateOrder)

export default orderRoute

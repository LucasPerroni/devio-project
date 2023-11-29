import { Router } from "express"

import { getLatestCode } from "../controllers/orderController.js"
import validateSchema from "../middlewares/validateSchema.js"

const orderRoute = Router()

orderRoute.get("/order/code/latest", getLatestCode)

export default orderRoute

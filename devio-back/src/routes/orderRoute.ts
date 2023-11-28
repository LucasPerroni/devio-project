import { Router } from "express"

import { createOrder } from "../controllers/orderController.js"
import validateSchema from "../middlewares/validateSchema.js"

const authRouter = Router()

authRouter.post("/food", createOrder)

export default authRouter

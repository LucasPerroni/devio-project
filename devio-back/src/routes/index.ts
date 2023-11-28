import { Router } from "express"

import foodRoute from "./foodRoute.js"
import orderRoute from "./orderRoute.js"

const routes = Router()

routes.use(foodRoute)
routes.use(orderRoute)

export default routes

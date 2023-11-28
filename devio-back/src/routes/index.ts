import { Router } from "express"

import foodRoute from "./orderRoute.js"

const routes = Router()

routes.use(foodRoute)

export default routes

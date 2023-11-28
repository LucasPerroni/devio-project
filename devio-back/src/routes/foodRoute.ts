import { Router } from "express"

import { getFood } from "../controllers/foodController.js"

const foodRotue = Router()

foodRotue.get("/food", getFood)

export default foodRotue

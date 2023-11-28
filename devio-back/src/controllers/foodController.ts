import { Request, Response } from "express"
import foodServices from "../services/foodServices.js"

export async function getFood(req: Request, res: Response) {
  const food = await foodServices.getFood()
  res.status(200).send(food)
}

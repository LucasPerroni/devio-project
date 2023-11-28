import { Request, Response } from "express"

import orderServices from "../services/orderServices.js"

export async function createOrder(req: Request, res: Response) {
  res.sendStatus(200)
}

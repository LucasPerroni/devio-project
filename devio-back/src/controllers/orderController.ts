import { Request, Response } from "express"

import orderServices from "../services/orderServices.js"

export async function getLatestCode(req: Request, res: Response) {
  const code = await orderServices.getLatestCode()
  
  res.status(200).send(code)
}

import { Request, Response } from "express"
import { Order } from "../schema/orderSchema.js"

import orderServices from "../services/orderServices.js"

export async function getLatestCode(req: Request, res: Response) {
  const code = await orderServices.getLatestCode()

  res.status(200).send(code)
}

export async function createOrder(req: Request, res: Response) {
  const body: Order = req.body

  await orderServices.validateOrderBody(body)
  await orderServices.createOrder(body)

  res.sendStatus(201)
}

export async function getUsers(req: Request, res: Response) {
  const users = await orderServices.getUsers()
  res.status(200).send(users)
}

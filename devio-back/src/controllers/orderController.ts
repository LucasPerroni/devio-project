import { Request, Response } from "express"
import { Order } from "../schema/orderSchema.js"
import { UpdateOrder } from "../schema/updateOrderSchema.js"

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

export async function updateOrder(req: Request, res: Response) {
  const body: UpdateOrder = req.body

  await orderServices.validateUpdateBody(body)
  await orderServices.updateOrder(body)

  res.sendStatus(200)
}

export async function deleteOrder(req: Request, res: Response) {
  const { userId } = req.params

  await orderServices.validateDeleteRequest(Number(userId))
  await orderServices.deleteOrder(Number(userId))

  res.sendStatus(200)
}

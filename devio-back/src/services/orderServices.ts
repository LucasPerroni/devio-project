import { Order } from "../schema/orderSchema.js"

import { Error } from "../middlewares/errorHandler.js"
import orderRepository from "../repositories/orderRepository.js"

async function getLatestCode() {
  let code = await orderRepository.getLatestCode()

  if (!code) {
    code = { code: 100 }
  }

  return code
}

async function getFoodById(id: number) {
  const food = await orderRepository.getFoodById(id)
  return food
}

async function validateOrderBody(body: Order) {
  for (let f of body.food) {
    const food = await orderRepository.getFoodById(f.id)
    if (!food) {
      Error.errorNotFound("Couldn't find food by id")
    }
  }

  const user = await orderRepository.getUserByCode(body.code)
  if (user) {
    Error.errorConflict("This code is already in use")
  }
}

async function createOrder(body: Order) {
  const user = await orderRepository.createUser({ name: body.name, code: body.code })
  await orderRepository.createOrders(user, body.food)
}

async function getUsers() {
  const users = await orderRepository.getUsers()
  return users
}

const orderServices = {
  getLatestCode,
  getFoodById,
  validateOrderBody,
  createOrder,
  getUsers,
}

export default orderServices

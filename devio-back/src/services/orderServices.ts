import { Order } from "../schema/orderSchema.js"
import { UpdateOrder } from "../schema/updateOrderSchema.js"

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

async function validateUpdateBody(body: UpdateOrder) {
  const user = await orderRepository.getUserById(body.id)

  if (!user) {
    Error.errorNotFound("Couldn't find this user")
  } else if (user.name !== body.name) {
    Error.errorUnprocessable("This user id is from a different user")
  } else if (user.status === body.status) {
    Error.errorConflict("This order is already in this state")
  }
}

async function updateOrder(body: UpdateOrder) {
  await orderRepository.updateOrder(body)
}

const orderServices = {
  getLatestCode,
  getFoodById,
  validateOrderBody,
  createOrder,
  getUsers,
  validateUpdateBody,
  updateOrder,
}

export default orderServices

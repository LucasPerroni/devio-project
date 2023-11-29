import { Food, User } from "@prisma/client"
import { Order } from "../schema/orderSchema.js"

import { prisma } from "../config/database.js"

async function getLatestCode() {
  const code = await prisma.user.findFirst({ orderBy: { code: "desc" }, select: { code: true } })
  return code
}

async function getUserByCode(code: number) {
  const user = await prisma.user.findFirst({ where: { code } })
  return user
}

async function getFoodById(id: number) {
  const food = await prisma.food.findUnique({ where: { id } })
  return food
}

async function createUser(body: Omit<Order, "food">) {
  const user = await prisma.user.create({ data: { name: body.name, code: body.code, status: false } })
  return user
}

async function createOrders(user: User, food: Pick<Food, "id">[]) {
  await prisma.$transaction(async (tx) => {
    for (let { id } of food) {
      await tx.order.create({ data: { userId: user.id, foodId: id } })
    }
  })
}

const orderRepository = {
  getLatestCode,
  getUserByCode,
  getFoodById,
  createUser,
  createOrders,
}

export default orderRepository

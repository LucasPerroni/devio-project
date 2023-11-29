import { Food, User } from "@prisma/client"
import { Order } from "../schema/orderSchema.js"
import { UpdateOrder } from "../schema/updateOrderSchema.js"

import { prisma } from "../config/database.js"

async function getLatestCode() {
  const code = await prisma.user.findFirst({ orderBy: { code: "desc" }, select: { code: true } })
  return code
}

async function getUserByCode(code: number) {
  const user = await prisma.user.findFirst({ where: { code } })
  return user
}

async function getUserById(id: number) {
  const user = await prisma.user.findFirst({ where: { id } })
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

async function getUsers() {
  const users = await prisma.user.findMany({
    orderBy: { code: "asc" },
    select: {
      id: true,
      name: true,
      code: true,
      status: true,
      createdAt: true,
      Order: { select: { food: true } },
    },
  })
  return users
}

async function updateOrder(body: UpdateOrder) {
  await prisma.user.update({ where: { id: body.id }, data: { status: body.status } })
}

const orderRepository = {
  getLatestCode,
  getUserByCode,
  getUserById,
  getFoodById,
  createUser,
  createOrders,
  getUsers,
  updateOrder,
}

export default orderRepository

import { prisma } from "../config/database.js"

async function getLatestCode() {
  const code = await prisma.user.findFirst({ orderBy: { code: "desc" }, select: { code: true } })
  return code
}

const orderRepository = {
  getLatestCode,
}

export default orderRepository

import { prisma } from "../config/database.js"

async function getFood() {
  const food = await prisma.food.findMany({
    orderBy: [{ type: "asc" }, { price: "asc" }],
  })

  return food
}

const foodRepository = {
  getFood,
}

export default foodRepository

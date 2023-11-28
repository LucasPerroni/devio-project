import foodRepository from "../repositories/foodRepository.js"

async function getFood() {
  const food = await foodRepository.getFood()
  return food
}

const foodServices = {
  getFood,
}

export default foodServices

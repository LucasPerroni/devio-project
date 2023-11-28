import api from "./api"

function getFood() {
  const promise = api.get("/food")
  return promise
}

const foodRepository = {
  getFood,
}

export default foodRepository

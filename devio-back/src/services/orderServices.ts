import orderRepository from "../repositories/orderRepository.js"

async function getLatestCode() {
  let code = await orderRepository.getLatestCode()

  if (!code) {
    code = { code: 100 }
  }

  return code
}

const orderServices = {
  getLatestCode,
}

export default orderServices

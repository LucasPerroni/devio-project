import api from "./api"

function getLatestCode() {
  const promise = api.get("/order/code/latest")
  return promise
}

function submitOrder(data) {
  const promise = api.post("/order", data)
  return promise
}

function getOrders() {
  const promise = api.get("/user")
  return promise
}

const orderRepository = {
  getLatestCode,
  submitOrder,
  getOrders,
}

export default orderRepository

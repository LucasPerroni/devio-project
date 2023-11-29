import { useEffect, useState } from "react"

import Navigation from "../Home/Navigation"
import Card from "./Card"

import orderRepository from "../../repositories/orderRepository"

import { Cooking, Ready, Wrapper } from "./styled"

export default function Cozinha() {
  const [orders, setOrders] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    orderRepository
      .getOrders()
      .then(({ data }) => setOrders(data))
      .catch(({ response }) => console.log(response))
  }, [refresh])

  return (
    <>
      <Navigation />

      <Wrapper>
        <Cooking>
          <h1>Preparando:</h1>
          {orders
            .filter((order) => {
              return !order.status
            })
            .map((order) => {
              return <Card key={order.id} order={order} refresh={refresh} setRefresh={setRefresh} />
            })}
        </Cooking>

        <span />

        <Ready>
          <h1>Pronto:</h1>
          {orders
            .filter((order) => {
              return order.status
            })
            .map((order) => {
              return (
                <Card key={order.id} order={order} refresh={refresh} setRefresh={setRefresh} status="ready" />
              )
            })}
        </Ready>
      </Wrapper>
    </>
  )
}

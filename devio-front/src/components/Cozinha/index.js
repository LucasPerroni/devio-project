import { useEffect, useState } from "react"

import Navigation from "../Home/Navigation"
import Card from "./Card"

import orderRepository from "../../repositories/orderRepository"

import { Cooking, Ready, Wrapper } from "./styled"

export default function Cozinha() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    orderRepository
      .getOrders()
      .then(({ data }) => setOrders(data))
      .catch(({ response }) => console.log(response))
  }, [])

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
              return <Card key={order.id} order={order} />
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
              return <Card key={order.id} order={order} status="ready" />
            })}
        </Ready>
      </Wrapper>
    </>
  )
}

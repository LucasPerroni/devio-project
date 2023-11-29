import { useEffect, useState } from "react"

import Navigation from "../Home/Navigation"
import Card from "./Card"
import Gif from "../../assets/gif/loading.gif"

import orderRepository from "../../repositories/orderRepository"

import { Cooking, Ready, Wrapper } from "./styled"

export default function Cozinha() {
  const [orders, setOrders] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(false)
  const [cardLoading, setCardLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    orderRepository
      .getOrders()
      .then(({ data }) => {
        setOrders(data)
        setLoading(false)
      })
      .catch(({ response }) => console.log(response))
  }, [refresh])

  return (
    <>
      <Navigation />

      <Wrapper>
        {!loading ? (
          <>
            <Cooking>
              <h1>Preparando:</h1>
              {orders
                .filter((order) => {
                  return !order.status
                })
                .map((order) => {
                  return (
                    <Card
                      key={order.id}
                      order={order}
                      refresh={refresh}
                      setRefresh={setRefresh}
                      loading={cardLoading}
                      setLoading={setCardLoading}
                    />
                  )
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
                    <Card
                      key={order.id}
                      order={order}
                      refresh={refresh}
                      setRefresh={setRefresh}
                      loading={cardLoading}
                      setLoading={setCardLoading}
                      status="ready"
                    />
                  )
                })}
            </Ready>
          </>
        ) : (
          <img src={Gif} alt="loading" className="loading-gif" />
        )}
      </Wrapper>
    </>
  )
}

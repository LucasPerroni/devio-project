import Navigation from "../Home/Navigation"
import { useEffect, useState } from "react"

import Gif from "../../assets/gif/loading.gif"

import orderRepository from "../../repositories/orderRepository"

import { Cooking, Ready, Wrapper } from "../Cozinha/styled"

export default function Retirada() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    orderRepository
      .getOrders()
      .then(({ data }) => {
        setUsers(data)
        setLoading(false)
      })
      .catch(({ response }) => console.log(response))
  }, [])

  return (
    <>
      <Navigation />

      <Wrapper className="withdraw">
        {!loading ? (
          <>
            <Cooking>
              <h1>Preparando:</h1>

              {users
                .filter((u) => {
                  return !u.status
                })
                .map((u) => {
                  return <p key={u.id}>{u.name}</p>
                })}
            </Cooking>

            <span />

            <Ready>
              <h1>Pronto:</h1>

              {users
                .filter((u) => {
                  return u.status
                })
                .map((u) => {
                  return (
                    <p key={u.id} className="ready">
                      {u.name}
                    </p>
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

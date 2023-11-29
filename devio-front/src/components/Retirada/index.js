import Navigation from "../Home/Navigation"
import { useEffect, useState } from "react"

import orderRepository from "../../repositories/orderRepository"

import { Cooking, Ready, Wrapper } from "../Cozinha/styled"

export default function Retirada() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    orderRepository
      .getOrders()
      .then(({ data }) => setUsers(data))
      .catch(({ response }) => console.log(response))
  }, [])

  return (
    <>
      <Navigation />

      <Wrapper className="withdraw">
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
      </Wrapper>
    </>
  )
}

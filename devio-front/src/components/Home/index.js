import { useEffect, useState } from "react"

import Navigation from "./Navigation"
import Category from "./Category"
import Food from "./Food"

import foodRepository from "../../repositories/foodRepository"

import { Wrapper } from "./styled"

export default function Home() {
  const [food, setFood] = useState([])
  const [category, setCategory] = useState("combos")

  useEffect(() => {
    foodRepository
      .getFood()
      .then(({ data }) => setFood(data))
      .catch(({ response }) => console.log(response))
  }, [])

  return (
    <>
      <Navigation />

      <Wrapper>
        <section>
          <h1>Seja bem vindo!</h1>
          <input placeholder="O que você procura?" type="text" />
        </section>

        <section>
          <h2>Categorias</h2>
          <p>Navegue por categoria</p>
          <Category setCategory={setCategory} />
        </section>

        <section>
          <h2>Produtos</h2>
          <p>Selecione um produto para adicionar ao seu pedido</p>
          <Food
            food={food.filter(({ type }) => {
              return type === category
            })}
          />
        </section>
      </Wrapper>
    </>
  )
}

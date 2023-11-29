import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import getCartPrice from "../../utils/getCartPrice"

import Navigation from "./Navigation"
import Category from "./Category"
import Food from "./Food"

import foodRepository from "../../repositories/foodRepository"

import { Buttons, Wrapper } from "./styled"
import ChooseFood, { Log } from "./ChooseFood"

export default function Home() {
  const { state } = useLocation()

  const [food, setFood] = useState([])
  const [category, setCategory] = useState("combos")
  const [selected, setSelected] = useState(null)
  const [cart, setCart] = useState(state?.cart ? state.cart : [])

  const navigate = useNavigate()

  useEffect(() => {
    window.history.replaceState({}, document.title)

    foodRepository
      .getFood()
      .then(({ data }) => setFood(data))
      .catch(({ response }) => console.log(response))
  }, [])

  function cancel() {
    setCart([])
  }

  function submitOrder() {
    navigate("/pagamento", { state: { cart } })
  }

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
            setSelected={setSelected}
          />
        </section>

        {cart.length > 0 ? (
          <Log>
            {cart.map((f) => {
              return (
                <div key={f.id}>
                  <p>
                    {f.times}x {f.name}
                  </p>
                  <p>R${((f.times * f.price) / 100).toFixed(2).replace(".", ",")}</p>
                </div>
              )
            })}

            <span />

            <p>Total do pedido:</p>
            <h1>R${(getCartPrice(cart) / 100).toFixed(2).replace(".", ",")}</h1>
          </Log>
        ) : (
          <></>
        )}

        <Buttons>
          <button onClick={cancel} className={cart.length > 0 ? "ready" : ""} disabled={cart.length === 0}>
            Cancelar
          </button>

          <button
            onClick={submitOrder}
            className={`finalize ${cart.length > 0 ? "ready" : ""}`}
            disabled={cart.length === 0}
          >
            Finalizar pedido
          </button>
        </Buttons>
      </Wrapper>

      {selected ? (
        <ChooseFood selected={selected} setSelected={setSelected} cart={cart} setCart={setCart} />
      ) : (
        <></>
      )}
    </>
  )
}

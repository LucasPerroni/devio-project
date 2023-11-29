import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import getCartPrice from "../../utils/getCartPrice"

import Navigation from "../Home/Navigation"
import Gif from "../../assets/gif/loading.gif"

import CloseIcon from "@mui/icons-material/Close"
import { Log } from "../Home/ChooseFood"
import { Buttons } from "../Home/styled"
import { InputWrapper, Method, Success, Summary, Wrapper } from "./styled"
import orderRepository from "../../repositories/orderRepository"

export default function Pagamento() {
  const navigate = useNavigate()
  const {
    state: { cart },
  } = useLocation()

  const [method, setMethod] = useState(null)
  const [name, setName] = useState(null)
  const [change, setChange] = useState(-getCartPrice(cart))
  const [code, setCode] = useState("---")
  const [finished, setFinished] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    orderRepository
      .getLatestCode()
      .then(({ data }) => {
        setCode(data.code + 1)
        setLoading(false)
      })
      .catch(({ response }) => console.log(response))
  }, [])

  function cancel() {
    navigate("/", { state: { cart } })
  }

  function handleInput(e) {
    const valor = Number(e.target.value).toFixed(2)
    const total = getCartPrice(cart)
    setChange(-(total - valor * 100))
  }

  function submit() {
    setLoading(true)

    const food = []
    cart.forEach((f) => {
      for (let i = 0; i < f.times; i++) {
        food.push({ id: f.id })
      }
    })

    const data = {
      name: name,
      code: code,
      food: food,
    }

    orderRepository
      .submitOrder(data)
      .then(() => {
        setLoading(false)
        setFinished(true)
      })
      .catch(({ response }) => console.log(response))
  }

  return (
    <>
      <Navigation />

      <Wrapper>
        <h1>Pagamento</h1>

        <div className="summary-method">
          <Summary>
            <h2>Resumo da compra</h2>

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

            <InputWrapper>
              <div>
                <h2>Nome do cliente</h2>
                <input onChange={(e) => setName(e.target.value)} placeholder="Primeiro nome" />
              </div>

              <div>
                <h2>Código</h2>
                {!loading ? <input value={code} disabled /> : <input value="loading..." disabled />}
              </div>
            </InputWrapper>
          </Summary>

          <Method>
            <h2>Selecione a forma de pagamento:</h2>

            <button className="disabled" disabled>
              <p>Débito</p>
              <span />
            </button>

            <button className="disabled" disabled>
              <p>Crédito</p>
              <span />
            </button>

            <button onClick={() => setMethod("dinheiro")} className={method === "dinheiro" ? "selected" : ""}>
              <p>Dinheiro</p>
              <span />
            </button>

            {method === "dinheiro" ? (
              <InputWrapper>
                <div>
                  <h2>Valor entregue</h2>
                  <input type="number" min="0.00" step="0.01" onChange={(e) => handleInput(e)}></input>
                </div>

                <div>
                  <h2>Troco</h2>
                  <input disabled value={`R$ ${(change / 100).toFixed(2).replace(".", ",")}`} />
                </div>
              </InputWrapper>
            ) : (
              <></>
            )}
          </Method>
        </div>

        <Buttons>
          <button className="ready" onClick={cancel} disabled={loading && name && change >= 0}>
            Cancelar
          </button>

          {!loading ? (
            <button
              onClick={submit}
              className={`finalize ${change >= 0 && name ? "ready" : ""}`}
              disabled={change < 0 || !name}
            >
              Finalizar pedido
            </button>
          ) : (
            <button className="finalize">
              <img src={Gif} alt="loading" />
            </button>
          )}
        </Buttons>
      </Wrapper>

      {finished ? (
        <Success>
          <div>
            <CloseIcon onClick={() => navigate("/cozinha")} className="close" />
            <img
              src="https://img.freepik.com/vetores-premium/casal-apaixonado-em-ambiente-romantico-no-jantar-bebendo-champanhe_200075-2115.jpg?w=740"
              alt="casal"
            />
            <h1>Pedido finalizado com sucesso!</h1>
            <p>O pedido foi encaminhado para a cozinha</p>
          </div>
        </Success>
      ) : (
        <></>
      )}
    </>
  )
}

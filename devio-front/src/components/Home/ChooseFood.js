import { useState } from "react"
import styled from "styled-components"

import CloseIcon from "@mui/icons-material/Close"
import Increment from "./IncrementQuantity"
import { Buttons } from "./styled"

export default function ChooseFood({ selected, setSelected, cart, setCart }) {
  const [quantity, setQuantity] = useState(1)

  function close() {
    setSelected(null)
  }

  function submit() {
    setCart([...cart, { ...selected, times: quantity }])
    close()
  }

  return (
    <Choice>
      <Menu>
        <Close onClick={close} />

        <h1>Revise seu pedido!</h1>

        <div className="description">
          <img src={selected.image} alt={selected.name} />

          <div>
            <h2>{selected.name}</h2>
            <p>
              {selected.description}, {selected.ingredients}
            </p>
            <Increment quantity={quantity} setQuantity={setQuantity} />
          </div>

          <h2>R${(selected.price / 100).toFixed(2).replace(".", ",")}</h2>
        </div>

        <Log>
          <div>
            <p>
              {quantity}x {selected.name}
            </p>
            <p>R${((quantity * selected.price) / 100).toFixed(2).replace(".", ",")}</p>
          </div>

          <span />

          <p>Total do pedido:</p>
          <h1>R${((quantity * selected.price) / 100).toFixed(2).replace(".", ",")}</h1>
        </Log>

        <Buttons>
          <button className="ready" onClick={close}>
            Cancelar
          </button>
          <button className="finalize ready" onClick={submit}>
            Adicionar ao carrinho
          </button>
        </Buttons>
      </Menu>
    </Choice>
  )
}

const Close = styled(CloseIcon)`
  position: absolute;
  right: 15px;
  top: 15px;

  font-size: 25px !important;
  color: #9f9f9f;

  transition: 0.3s !important;

  &:hover {
    cursor: pointer;
    color: black;
  }
`

const Choice = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;

  background-color: rgba(0, 0, 0, 0.6);

  padding: 75px 0;
`

const Menu = styled.div`
  position: relative;

  width: 75%;
  height: auto;
  background-color: white;

  margin: auto;
  border-radius: 20px;

  padding: 40px;

  h1 {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
  }

  h2 {
    font-weight: bold;
    font-size: 22px;
  }

  p {
    margin-top: 7px !important;
    margin-bottom: 7px !important;
    font-size: 18px;
  }

  .description {
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    * {
      margin: 0 4px;
    }

    img {
      max-width: 30%;
      max-height: 300px;

      border-radius: 10px;
    }
  }
`

export const Log = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 20px;
  padding: 25px;
  border-radius: 5px;

  border: 1px solid #9f9f9f;

  div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  span {
    width: 100%;
    border-bottom: 1px dotted #9f9f9f;
    margin: 30px 0 10px;
  }

  h1 {
    margin: 0;
    font-size: 26px;
  }
`

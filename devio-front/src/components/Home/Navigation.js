import { useNavigate, useLocation } from "react-router-dom"

import styled from "styled-components"

export default function Navigation() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Header>
      <p onClick={() => navigate("/")}>Fast Food</p>

      <div>
        <button onClick={() => navigate("/")} className={pathname === "/" ? "selected" : ""}>
          Pedidos
        </button>

        <button onClick={() => navigate("/cozinha")} className={pathname === "/cozinha" ? "selected" : ""}>
          Cozinha
        </button>

        <button onClick={() => navigate("/retirada")} className={pathname === "/retirada" ? "selected" : ""}>
          Retirada
        </button>
      </div>
    </Header>
  )
}

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 50px;
  background-color: #125c13;

  * {
    color: white;
    font-weight: bold;
  }

  p {
    font-size: 25px;

    &:hover {
      cursor: pointer;
    }
  }

  button {
    background-color: #125c13;
    border: none;

    height: 37px;
    width: 100px;
    margin-left: 25px;
    border-radius: 12px;

    font-size: 20px;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      background-color: #0c400d;
    }

    &.selected {
      background-color: #0c400d;
    }
  }
`

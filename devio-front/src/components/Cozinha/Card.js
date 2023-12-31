import styled from "styled-components"

import CloseIcon from "@mui/icons-material/Close"
import CheckIcon from "@mui/icons-material/Check"

import orderRepository from "../../repositories/orderRepository"

export default function Card({ order, status, refresh, setRefresh, loading, setLoading }) {
  const foodList = []

  for (let i = 0; i < order.Order.length; i++) {
    if (!foodList.some((f) => f.id === order.Order[i].food.id)) {
      foodList.push({ ...order.Order[i].food, count: 1 })
    } else {
      foodList.find((f) => f.id === order.Order[i].food.id).count += 1
    }
  }

  function deleteOrder(order) {
    const confirm = window.confirm(`Do you really wish to delete ${order.name}'s order?`)

    if (confirm) {
      setLoading(true)

      orderRepository
        .deleteOrder(order.id)
        .then(() => {
          setLoading(false)
          setRefresh(!refresh)
        })
        .catch(({ response }) => console.log(response))
    }
  }

  function updateOrder(order) {
    setLoading(true)

    const data = {
      id: order.id,
      name: order.name,
      status: !order.status,
    }

    orderRepository
      .updateOrder(data)
      .then(() => {
        setLoading(false)
        setRefresh(!refresh)
      })
      .catch(({ response }) => console.log(response))
  }

  return (
    <Main className={status == "ready" ? "ready" : ""}>
      <div className="info">
        <img src={foodList[0].image} alt="haamburguer" />
        <div>
          <h2>
            {order.code} - {order.name}
          </h2>
          {foodList.map((f) => {
            return (
              <p key={f.id}>
                {f.count}x {f.name}
              </p>
            )
          })}
        </div>
      </div>

      <div className="icons">
        <CloseIcon
          className={`close ${loading ? "loading" : ""}`}
          onClick={!loading ? () => deleteOrder(order) : null}
        />

        {status === "ready" ? (
          <></>
        ) : (
          <CheckIcon
            className={`check ${loading ? "loading" : ""}`}
            onClick={!loading ? () => updateOrder(order) : null}
          />
        )}
      </div>
    </Main>
  )
}

const Main = styled.article`
  width: 100%;
  padding: 20px;
  margin: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.2);

  &.ready {
    box-shadow: 2px 2px 6px 1px rgba(18, 166, 23, 0.5);

    h2 {
      color: rgba(18, 166, 23);
    }
  }

  img {
    max-width: 30%;
    max-height: 220px;
    margin-right: 10px;
    border-radius: 5px;
  }

  h2 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 7px;
  }

  p {
    font-size: 16px;
    margin-bottom: 4px;
  }

  .info {
    display: flex;
    align-items: center;

    div {
      display: block;
    }
  }

  .icons {
    display: flex;
    align-items: center;

    * {
      transition: 0.3s;
      font-size: 35px !important;
      border-radius: 5px;

      &:hover {
        cursor: pointer;
        font-size: 40px !important;
      }
    }

    .loading {
      color: #9f9f9f;
      background-color: rgba(0, 0, 0, 0.15);

      &:hover {
        *,
        & {
          cursor: progress;
          font-size: 35px !important;
        }
      }
    }
  }

  .close {
    margin-left: 10px;
    padding: 2px;

    color: #cf0707;
    background-color: #fae5e5;
  }

  .check {
    margin-left: 15px;
    padding: 2px;

    color: #12a617;
    background-color: #e5f5e6;
  }
`

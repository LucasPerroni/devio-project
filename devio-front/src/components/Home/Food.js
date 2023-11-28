import { styled } from "styled-components"

export default function Food({ food }) {
  return (
    <Options>
      {food.map((f) => {
        return (
          <Option key={f.id} className={f.type}>
            <img src={f.image} alt={f.type} />
            <h3>{f.name}</h3>
            <p>{f.description}</p>
            <h3>R${(f.price / 100).toFixed(2).replace(".", ",")}</h3>
          </Option>
        )
      })}
    </Options>
  )
}

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 100%;
`

const Option = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 240px;
  height: 320px;
  overflow: hidden;
  text-align: center;

  padding: 20px;

  border-radius: 20px;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.2);

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    width: 250px;
    height: 330px;
  }

  img {
    max-width: 100%;
    height: 60%;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
  }
`

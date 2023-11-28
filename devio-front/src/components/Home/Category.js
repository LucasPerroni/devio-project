import styled from "styled-components"

export default function Category({ setCategory }) {
  function handleClick(name) {
    setCategory(name.toLowerCase())
  }

  const categories = [
    {
      name: "Combos",
      image:
        "https://s2.glbimg.com/3Q9x2c8dWyetlqFutMZ8kmlarWo=/e.glbimg.com/og/ed/f/original/2022/05/27/tentador-carne.jpg",
    },
    {
      name: "Acompanhamentos",
      image: "https://img.freepik.com/fotos-premium/batatas-fritas-em-um-fundo-branco_269543-544.jpg",
    },
    { name: "Bebidas", image: "https://www.designi.com.br/images/preview/10000392.jpg" },
    {
      name: "Sobremesas",
      image:
        "https://img.freepik.com/fotos-premium/sobremesa-de-bolo-de-chocolate-isolada-em-um-fundo-branco-puro_826582-34.jpg",
    },
  ]

  return (
    <Options>
      {categories.map(({ name, image }) => {
        return (
          <Option onClick={() => handleClick(name)} key={name}>
            <img src={image} alt={name} />
            <p>{name}</p>
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

  width: 220px;
  height: 160px;
  overflow: hidden;

  padding: 20px;

  border-radius: 20px;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.2);

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    width: 230px;
    height: 170px;
  }

  img {
    max-width: 100%;
    height: 90%;
    border-radius: 10px;
  }

  p {
    font-size: 22px;
    font-weight: bold;
  }
`

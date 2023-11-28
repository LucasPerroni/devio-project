import { styled } from "styled-components"

export const Wrapper = styled.main`
  height: calc(100vh - 56px);
  width: 100%;
  overflow: auto;

  padding: 30px 60px;

  section {
    margin-bottom: 40px;

    *:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  h1 {
    font-weight: bold;
    font-size: 30px;
  }

  h2 {
    font-weight: bold;
    font-size: 25px;
  }

  p {
    font-size: 22px;
    color: #121212;
  }

  input {
    border: none;
    outline: none;
    background-color: #f4f4f4;
    transition: 0.5s;

    height: 40px;
    width: 200px;

    padding: 0 15px;
    font-size: 16px;

    border-radius: 10px;

    &::placeholder,
    & {
      color: #989898;
    }

    &:focus {
      width: 350px;
      font-size: 20px;
    }
  }
`

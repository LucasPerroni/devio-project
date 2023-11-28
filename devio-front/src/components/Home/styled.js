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
export const Buttons = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  margin-top: 30px;

  *:not(:last-child) {
    margin-right: 20px;
  }

  button {
    height: 50px;

    outline: none;
    background-color: white;
    border-radius: 10px;
    border: 3px solid #9f9f9f;

    font-size: 18px;
    font-weight: bold;
    color: #9f9f9f;

    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 0 10px;

    &.finalize {
      background-color: #9f9f9f;
      color: white !important;
    }

    &.ready {
      border: 3px solid #125c13;
      color: #125c13;

      &:hover {
        cursor: pointer;
      }
    }

    &.finalize.ready {
      background-color: #125c13;
    }
  }
`

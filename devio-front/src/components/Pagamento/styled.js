import { styled } from "styled-components"

export const Wrapper = styled.main`
  padding: 30px 60px;

  h1 {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 35px;
  }

  h2 {
    font-weight: bold;
    font-size: 18px;
  }

  p {
    font-size: 16px;
  }

  .summary-method {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const Summary = styled.section`
  width: 46%;
`

export const Method = styled.section`
  width: 46%;

  display: flex;
  flex-direction: column;

  button:first-of-type {
    margin-top: 20px;
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 60px;
    margin-bottom: 15px;
    padding: 0 20px;

    outline: none;
    border: 2px solid #9f9f9f;
    border-radius: 10px;

    background-color: white;

    p {
      font-weight: bold;
      font-size: 26px;
      color: #9f9f9f;
    }

    span {
      width: 20px;
      height: 20px;

      outline: 2px solid #9f9f9f;
      border-radius: 50%;
    }

    &:hover {
      cursor: pointer;
    }

    &.selected {
      border: 2px solid #125c13;

      p {
        color: #125c13;
      }

      span {
        background-color: #125c13;
        outline: 2px solid #125c13;
      }
    }

    &.disabled {
      cursor: default;
      border: 2px solid #b7b7b7;

      p {
        color: #b7b7b7;
      }

      span {
        outline: 2px solid #b7b7b7;
      }
    }
  }
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;

  div {
    width: 48%;
  }

  input {
    margin-top: 5px;

    border: none;
    outline: none;
    background-color: #f4f4f4;
    transition: 0.5s;

    height: 40px;
    width: 100%;

    padding: 0 15px;
    font-size: 16px;

    border-radius: 5px;

    &::placeholder,
    & {
      color: #989898;
    }

    &:focus {
      border: 1px solid #9f9f9f;
    }
  }
`

export const Success = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.6);

  padding: 75px 0;

  div {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: white;
    height: 500px;
    width: 50%;

    border-radius: 20px;
    padding: 30px;

    text-align: center;

    img {
      max-width: 90%;
      max-height: 75%;
    }

    h1 {
      font-weight: bold;
      font-size: 30px;
    }

    p {
      font-size: 18px;
      margin-top: 10px;
    }

    .close {
      position: absolute;
      right: 15px;
      top: 15px;

      font-size: 30px !important;
      color: #9f9f9f;

      transition: 0.3s !important;

      &:hover {
        cursor: pointer;
        color: black;
      }
    }
  }
`

import styled from "styled-components"

export const Wrapper = styled.main`
  position: relative;

  width: 100%;
  overflow: auto;
  padding: 30px 60px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    font-weight: bold;
    font-size: 30px;
  }

  span {
    position: absolute;
    right: 50%;

    height: calc(100% - 60px);
    border-right: 3px solid #9f9f9f;
  }

  &.withdraw {
    padding: 40px 80px;

    h1 {
      font-size: 36px;
    }

    p {
      font-weight: bold;
      font-size: 44px;

      color: #9f9f9f;
      margin: 30px 0;
    }

    .ready {
      color: #125c13;
    }
  }

  .loading-gif {
    margin: auto;
    height: 15%;
  }
`

export const Cooking = styled.section`
  width: 45%;
`

export const Ready = styled.section`
  width: 45%;
`

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
`

export const Cooking = styled.section`
  width: 45%;
`

export const Ready = styled.section`
  width: 45%;
`

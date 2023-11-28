import * as React from "react"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Box from "@mui/material/Box"
import styled from "styled-components"

export default function Increment({ quantity, setQuantity }) {
  function handleClick(status) {
    if (status === "-" && quantity > 1) {
      setQuantity(quantity - 1)
    } else if (status === "+") {
      setQuantity(quantity + 1)
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <Wrapper variant="outlined" aria-label="outlined button group">
        <ButtonStyled onClick={() => handleClick("-")}>-</ButtonStyled>
        <p>{quantity}</p>
        <ButtonStyled onClick={() => handleClick("+")}>+</ButtonStyled>
      </Wrapper>
    </Box>
  )
}

const Wrapper = styled(ButtonGroup)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 2px solid #125c13;
  border-radius: 17px !important;

  * {
    margin: 0 !important;
  }

  p {
  }
`

const ButtonStyled = styled(Button)`
  border: none !important;

  color: white !important;
  font-size: 17px !important;

  border-radius: 15px !important;
  background-color: #125c13 !important;

  &:first-child {
    border-right: 2px solid #125c13 !important;
    margin-right: 7px !important;
  }

  &:last-child {
    border-left: 2px solid #125c13 !important;
    margin-left: 7px !important;
  }
`

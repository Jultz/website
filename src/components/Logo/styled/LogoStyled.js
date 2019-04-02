import styled from "styled-components"

const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 2rem;
  @media (min-width: 480px) {
    font-size: 3rem;
  }
  line-height: 1;
  height: 150%;
  width: 100%;
`

export default LogoStyled

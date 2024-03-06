import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  background: transparent;

  ${({ $shadowColor }) =>
    $shadowColor ? `box-shadow: 0 0 20px 5px ${$shadowColor}` : ""};

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  ${({ $variant }) => {
    if ($variant === "outlined") {
      return "border: 1px solid black";
    } else if ($variant === "contained") {
      return css`
        background: black;
        color: white;

        &:hover {
          background: rgba(0, 0, 0, 0.8);
        }
      `;
    }
  }}
`;

export default function HomePage() {
  return (
    <>
      <h1>Styled Components 2</h1>
      <StyledButton $shadowColor="red">Text</StyledButton>
      <StyledButton $shadowColor="#123456" type="button" $variant="outlined">
        Outlined
      </StyledButton>
      <StyledButton $variant="contained">Contained</StyledButton>
    </>
  );
}

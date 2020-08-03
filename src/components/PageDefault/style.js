import styled, { css } from "styled-components";

export const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 80px 5% 0 5%;
  ${({ paddingAll }) =>
    css`
      padding: ${paddingAll};
    `}
`;

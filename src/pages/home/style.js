import styled from "styled-components";

export const ContainerLoading = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 5px solid var(--grayMedium);
  border-top: 5px solid var(--primary);
  animation: loading 1s ease-in infinite;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;

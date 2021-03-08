import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

const spin = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

export const Container = styled.main`
  margin-top: 50px;
  max-width: 1366px;

  div.loading-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .loading {
      margin-top: 1rem;
      width: 50px;
      height: 50px;
      border: 5px solid var(--primary);
      border-top-color: ${lighten(0.1, 'rgb(145, 71, 255)')};
      border-radius: 50%;
      animation: ${spin} 1s linear infinite;
    }
  }
`;

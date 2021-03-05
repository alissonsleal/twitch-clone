import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  .videos {
    margin-top: 1rem;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }

  @media (min-width: 640px) {
    .videos {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1280px) {
    .videos {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

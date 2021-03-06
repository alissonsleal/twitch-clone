import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem;
  width: 100%;

  .videos {
    margin-top: 1rem;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    place-items: center;
    width: 100%;
    row-gap: 1rem;
    column-gap: 0.5rem;

    div {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .videos {
      grid-template-columns: 1fr 1fr;

      div:nth-child(3),
      div:nth-child(4) {
        display: none;
      }
    }
  }

  @media (min-width: 1076px) {
    .videos {
      grid-template-columns: 1fr 1fr 1fr;

      div:nth-child(3) {
        display: flex;
      }
    }
  }

  @media (min-width: 1366px) {
    .videos {
      grid-template-columns: 1fr 1fr 1fr 1fr;

      div:last-child {
        display: flex;
      }
    }
  }
`;

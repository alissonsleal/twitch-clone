import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  height: 360px;
  width: 100%;

  img {
    z-index: 0;
    opacity: 0.3;
    transition: opacity 0.3s ease;
    object-fit: cover;
    width: calc(100% / 2);
    height: 80%;

    :hover {
      opacity: 1;
    }
  }

  iframe {
    border: none;
    position: absolute;
    z-index: 1;
    opacity: 1;
    width: 100%;
    height: 100%;
    max-width: 640px;
    max-height: 360px;
  }

  @media (min-width: 640px) {
  }

  @media (min-width: 1280px) {
  }
`;

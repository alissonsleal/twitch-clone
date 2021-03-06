import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

interface ButtonProps {
  buttonType: 'primary' | 'secondary';
}

export const Container = styled.button<ButtonProps>`
  color: #fff;
  font-weight: bold;
  padding: 0.5rem;
  margin: 0 0.5rem;
  border-radius: 4px;
  display: grid;
  place-content: center;
  font-size: 13px;

  ${(props) =>
    props.buttonType === 'primary'
      ? css`
          background-color: var(--primary);

          :hover {
            background-color: ${darken(0.1, 'rgb(145, 71, 255)')};
          }
        `
      : css`
          background-color: #3a3a3d;
          :hover {
            background-color: ${lighten(0.1, '#3a3a3d')};
          }
        `};
`;

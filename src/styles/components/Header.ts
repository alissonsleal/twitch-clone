import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--light-background);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  height: 50px;
  padding: 5px;
  font-size: 14px;
`;

export const LeftMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;

  ul {
    padding: 0 10px;
    li {
      list-style-type: none;
      display: inline-block;
      padding: 0 10px;
      cursor: pointer;

      a {
        :hover {
          color: #a970ff;
        }
      }
    }
  }
`;
export const MiddleMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;

  div {
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: #29292b;
    width: 100%;

    label[for='search'] {
      position: absolute;
      top: -2000px;
    }

    input {
      height: 36px;
      width: 100%;
      background-color: #464648;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      padding: 1rem;
      color: var(--text);

      ::placeholder {
        color: #bababb;
      }
    }

    svg {
      margin: 0 8px;
      fill: #5a5a5c;
    }
  }
`;
export const RightMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  svg {
    fill: #fafafa;
  }
`;

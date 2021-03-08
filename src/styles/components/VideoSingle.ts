import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  .video-info {
    display: flex;
    flex-direction: column;
    background-color: red;
    position: relative;
    width: 100%;

    img {
      width: 100%;
    }

    strong {
      position: absolute;
      padding: 0.4rem;
      background-color: rgb(233, 25, 22);
      color: #fff;
      margin: 0.2rem;
      font-size: 13px;
      line-height: 10px;
      border-radius: 6px;
    }

    p {
      position: absolute;
      bottom: 0;
      padding: 0.4rem;
      margin: 0.2rem;
      font-size: 14px;
      line-height: 14px;
      background-color: rgba(33, 33, 33, 0.8);
      border-radius: 4px;
    }
  }

  .profile-info {
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 1rem;
    }

    div {
      display: flex;
      flex-direction: column;
      font-size: 14px;

      strong {
        width: calc(300px - 1rem - 50px);

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p {
        margin: 0;
        font-size: 14px;
      }

      span {
        background-color: #333;
        width: fit-content;
        font-size: 12px;
        line-height: 8px;
        font-weight: bold;
        padding: 0.5rem;
        border-radius: 40px;
      }
    }
  }

  :hover {
    .video-info {
      img,
      strong,
      p {
        transform: translate(7px, -5px);
      }
      background-color: rgb(233, 25, 22);
    }
  }
`;

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from '../styles/components/Main';
import VideoGroup from './VideoGroup';

const Main = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const response = await axios.get(
      `https://twitch-cors.herokuapp.com/https://api.twitch.tv/kraken/streams?limit=4&offset=${Math.floor(
        Math.random() * 100,
      )}`,
      {
        headers: {
          Accept: 'application/vnd.twitchtv.v5+json',
          'Client-Id': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o',
        },
      },
    );
    setData(response.data.streams);
  }

  return (
    <Container>
      {console.log(data)}
      <VideoGroup data={data} />
      <VideoGroup data={data} />
      <VideoGroup data={data} />
      <VideoGroup data={data} />
    </Container>
  );
};

export default Main;

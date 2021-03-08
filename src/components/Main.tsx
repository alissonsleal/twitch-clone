import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from '../styles/components/Main';
import VideoCarousel from './VideoCarousel';
import VideoGroup, { DataProps } from './VideoGroup';

const Main = () => {
  const [data, setData] = useState<DataProps[]>();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const response = await axios.get(
      `https://api.twitch.tv/kraken/streams?limit=30&offset=${Math.floor(
        Math.random() * 100,
      )}`,
      {
        headers: {
          Accept: 'application/vnd.twitchtv.v5+json',
          'Client-Id': 'l4ulgpuzjl21kfkklj0k7aycw7ho72o', // this is a "public" client-id, i always hide my private keys in a .env file
        },
      },
    );
    setData(response.data.streams);
  }

  if (!data) {
    return (
      <Container>
        <div className="loading-container">
          <h1>Twitch Clone</h1>
          <div className="loading"></div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <VideoCarousel data={data} />
      <VideoGroup data={data} />
      <VideoGroup data={data} />
      <VideoGroup data={data} />
      <VideoGroup data={data} />
    </Container>
  );
};

export default Main;

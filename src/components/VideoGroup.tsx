import { Container } from '../styles/components/VideoGroup';
import VideoSingle from './VideoSingle';

export interface VideoGroupProps {
  data?: DataProps[];
}

export interface DataProps {
  _id: number;
  viewers: number;
  channel: {
    status: string;
    logo: string;
    display_name: string;
    url: string;
  };
  preview: {
    medium: string;
    large: string;
  };
}

function shuffleArray(arr: DataProps[]) {
  return arr.sort(() => Math.random() - 0.5);
}

const VideoGroup: React.FC<VideoGroupProps> = ({ data }) => {
  if (!data) {
    return <h1>Loading Twitch Clone...</h1>;
  }

  const shuffledData = shuffleArray(data).slice(0, 4);

  return (
    <Container>
      <strong>Recommended channels</strong>
      <div className="videos">
        {shuffledData &&
          shuffledData.map((stream) => (
            <VideoSingle
              key={stream._id}
              title={stream.channel.status}
              channel={stream.channel.display_name}
              tags={['English']}
              avatar={stream.channel.logo.replace('300x300', '50x50')}
              preview={stream.preview.medium}
              viewers={stream.viewers}
            />
          ))}
      </div>
    </Container>
  );
};

export default VideoGroup;

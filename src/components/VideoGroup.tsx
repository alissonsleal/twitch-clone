import { Container } from '../styles/components/VideoGroup';
import VideoSingle from './VideoSingle';

interface VideoGroupProps {
  data?: DataProps[];
}

interface DataProps {
  viewers: number;
  channel: {
    status: string;
    logo: string;
    display_name: string;
    url: string;
  };
  preview: {
    medium: string;
  };
}

const VideoGroup: React.FC<VideoGroupProps> = ({ data }) => {
  return (
    <Container>
      <strong>Recommended channels</strong>
      <div className="videos">
        {data &&
          data.map((stream) => (
            <VideoSingle
              title={stream.channel.status}
              channel={stream.channel.display_name}
              tags={['English']}
              avatar={stream.channel.logo}
              preview={stream.preview.medium}
              viewers={stream.viewers}
            />
          ))}

        {/* // map this */}
      </div>
    </Container>
  );
};

export default VideoGroup;

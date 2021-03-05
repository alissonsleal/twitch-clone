import { Container } from '../styles/components/VideoSingle';

interface VideoSingleProps {
  title: string;
  channel: string;
  tags: string[];
  avatar: string;
  preview: string;
  viewers: number;
}

const formatNumber = (num: number) => {
  if (num > 1000 && num < 1000000) {
    return (num / 1000).toString().slice(0, 3) + 'K';
  } else if (num > 1000000) {
    return (num / 1000000).toString().slice(0, 3) + 'M';
  } else {
    return num;
  }
};

const VideoSingle: React.FC<VideoSingleProps> = ({
  title,
  channel,
  tags,
  avatar,
  preview,
  viewers,
}) => {
  return (
    <Container>
      <div className="video-info">
        <img src={preview} alt="thumbnail" />
        <strong>LIVE</strong>
        <p>{`${formatNumber(viewers)} viewers`}</p>
      </div>
      <div className="profile-info">
        <img src={avatar} alt="Profile" />
        <div>
          <strong title={title}>{title}</strong>
          <p>{channel}</p>
          {tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default VideoSingle;

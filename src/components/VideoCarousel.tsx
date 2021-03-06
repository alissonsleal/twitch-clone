import { useEffect, useState } from 'react';
import { Container } from '../styles/components/VideoCarousel';
import { VideoGroupProps } from './VideoGroup';

const VideoCarousel: React.FC<VideoGroupProps> = ({ data }) => {
  const [mainVideoUrl, setMainVideoUrl] = useState([]);

  useEffect(() => {}, []);
  let windowWidth = typeof window !== 'undefined' && window.innerWidth;

  return (
    <Container>
      {data && (
        <>
          {/* Create a component for this later */}
          <iframe
            src={`https://player.twitch.tv/?channel=${data[2].channel.display_name}&parent=${process.env.NEXT_PUBLIC_BASE_DOMAIN}&muted=true&autoplay=true`}
            height={'100%'}
            width={'100%'}
            allowFullScreen={true}
          />
          <img
            src={data[0].preview.large}
            width={windowWidth >= 640 ? 640 : windowWidth}
            onClick={() => console.log('clicked 1')}
          />
          <img
            src={data[1].preview.large}
            width={windowWidth >= 640 ? 640 : windowWidth}
            onClick={() => console.log('clicked 2')}
          />
        </>
      )}
    </Container>
  );
};

export default VideoCarousel;

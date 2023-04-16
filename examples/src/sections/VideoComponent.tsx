import React, { useRef, useState } from 'react';
import { Button } from '@chakra-ui/react';
interface VideoComponentProps {
  videoUrl: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const handleVideoCanPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.duration > 0) {
      video.controls = false;
      video.addEventListener('ended', handleVideoEnded, false);
    }
  };

  return (
    <div>
        <div>
      <video
        ref={videoRef}
        src={videoUrl}
        controls={false}
        onCanPlay={handleVideoCanPlay}
        
      />
      </div>
      <Button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</Button>
      {!isPlaying && <input type="text" placeholder="Enter text here" />}
    </div>

  );
};

export default VideoComponent;

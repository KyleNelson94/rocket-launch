import * as React from 'react';

import ReactPlayer from 'react-player/lazy';
import { VideoWrapper } from './styles';
interface Props {
  url: string;
  playing?: boolean;
  loop?: boolean;
  controls?: boolean;
  light?: boolean;
  volume?: number; // between 0-1
  muted?: boolean;
  playbackRate?: number;
  width: string;
  height: string;
}

function Video({
  url,
  playing,
  loop,
  controls,
  width,
  height,
  light,
  }: Props) {

  return (
    <VideoWrapper>
      <ReactPlayer
        className="react-player" 
        url={url} 
        loop={loop}
        playing={playing}
        controls={controls}
        width={width}
        height={height}
        light={light}
        muted={true}
      />
    </VideoWrapper>
  );
}

export default Video;
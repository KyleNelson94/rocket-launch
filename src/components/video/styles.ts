import styled from 'styled-components';

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 100%; /* 720 / 1280 = 0.5625 */
  overflow: hidden;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(2);
    overflow: hidden;
  }
`;

export {
  VideoWrapper
}
import * as React from 'react';
import useAxios from 'axios-hooks';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import Video from '@components/video';
import Section from '@components/section';
import Loader from '@components/loader/Loader';
import lunarImg from '../assets/images/lunar_landing.jpg';
import rocketImg from '../assets/images/starship_launch.png';

const SectionFilterContain = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  min-width: 15.6rem;
  color: ${props => props.theme.color.primary};
  background-color: ${props => props.theme.color.secondary};
  z-index: 10;
  width: 100%;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    padding: 0 3rem;
    
    li {
      display: inline;
      font-weight: bold;
      padding: 2.5rem;
      transition: 300ms cubic-bezier(0.19, 1, 0.22, 1);

      &:hover {
        background: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

const HomePage = () => {
  const [launches, setLaunches] = React.useState([]);
  const [{ data, loading, error }] = useAxios(
    'https://api.spacexdata.com/v4/launches'
  );

  React.useEffect(() => {

    if(loading) {
      toast("We are loading the Data...");
    }

    if(data) {
      
      setLaunches(data);
      toast("We got it.");
    }

    if (error) {
      toast("Something went wrong!")
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Section width={65} clearPadding>
        <SectionFilterContain>
          <ul>
            <li>App</li>
            <li>Flights</li>
            <li>Hotel</li>
          </ul>
        </SectionFilterContain>
        <Video
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=C8JyvzU0CXU"
          controls={false}
          playing
          loop
        />
      </Section>
      <Section width={35} imageUri={lunarImg}>
        <h1>Section two</h1>
      </Section>
    </>
  )
}

export default HomePage;
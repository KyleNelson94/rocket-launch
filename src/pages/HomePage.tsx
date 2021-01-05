import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import useAxios from 'axios-hooks';

import Loader from '../components/loader/Loader';
import BaseCard from '../components/card/BaseCard';

const HomePage = () => {
  const [launches, setLaunches] = useState([]);
  const [{ data, loading, error }] = useAxios(
    'https://api.spacexdata.com/v4/launches'
  );

  useEffect(() => {

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
    <div>
      { 
        launches.length > 0 && launches.map((launch: any) => {
          const name = launch.name ? launch.name : "No title";
          return <BaseCard title={name} content={launch.details} />;
        })
      }
    </div>
  )
}

export default HomePage;
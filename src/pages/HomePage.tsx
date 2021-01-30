import * as React from 'react';
import { toast } from 'react-toastify';
import useAxios from 'axios-hooks';

import Loader from '@components/loader/Loader';

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
    <div>
      <h1>Hello</h1>
      
    </div>
  )
}

export default HomePage;
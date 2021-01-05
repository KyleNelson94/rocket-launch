import React, { useEffect } from 'react';

import { toast } from 'react-toastify';
import Router from './navigation/Router';

function App() {

  useEffect(() => {

    toast("Routing is working.");
  }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './header';
import SimpleHeader from './simpleHeader';
import { useAuth0 } from "@auth0/auth0-react";




const Home = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    
    <div>
      {isAuthenticated ?
    (  <Header />):(<SimpleHeader/>)
}
    </div>
  );
};

export default Home;
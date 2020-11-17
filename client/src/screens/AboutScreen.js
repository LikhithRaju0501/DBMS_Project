import React, { useEffect, useState } from 'react';
import NavBarComp from '../components/NavBarComp';
import queryString from 'query-string';

const AboutScreen = ({ location }) => {
  const [Name, setName] = useState(null);
  useEffect(() => {
    const { name } = queryString.parse(location.search);
    setName(name);
  }, [location]);
  return (
    <div>
      <NavBarComp Name={Name} />
      <div
        style={{
          fontFamily: 'Courgette',
          fontSize: 40,
          marginLeft: 40,
          marginRight: 40,
        }}
      >
        This Application gives information regarding the Latest Movies,
        Songs,Web Series released along with their ratings, platform in which it
        is released.
      </div>
    </div>
  );
};

export default AboutScreen;

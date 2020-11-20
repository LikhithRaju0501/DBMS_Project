import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import SubbedMoviePlatform from '../components/subbedPlatforms/SubbedMoviePlatform';
import SubbedSongPlatform from '../components/subbedPlatforms/SubbedSongPlatform';

const SubscribedContent = ({ location }) => {
  const [IsMoviePlatform, setIsMoviePlatform] = useState(true);
  const [PlatID, setPlatID] = useState(1);

  useEffect(() => {
    const { platID } = queryString.parse(location.search);
    if (platID === '1' || platID === '2') {
      if (platID === '1') {
        setPlatID(1);
      } else {
        setPlatID(2);
      }
      console.log('Movies and Series');
    } else {
      setIsMoviePlatform(false);
      if (platID === '3') {
        setPlatID(3);
      } else {
        setPlatID(4);
      }
    }
  }, [location]);
  return (
    <div>
      {IsMoviePlatform ? (
        <SubbedMoviePlatform PlatID={PlatID} />
      ) : (
        <SubbedSongPlatform PlatID={PlatID} />
      )}
    </div>
  );
};

export default SubscribedContent;

import React, { useState, useEffect } from 'react';
import UserSubbedPlats from '../components/SubscribeForm/UserSubbedPlats';
import queryString from 'query-string';
import './CSS/SignUpAbout.css';
import SideNavBar from '../components/SideNavBar';
import Heading from '../components/SubscribeForm/Heading';

const SubscribeForm = ({ location }) => {
  const [UserID, setUserID] = useState(null);
  const [Name, setName] = useState(null);

  useEffect(() => {
    const { name, user_id } = queryString.parse(location.search);
    setName(name);

    setUserID(user_id);
  }, [location, Name]);

  return (
    <div className='SubForm-container'>
      <div style={{ flex: 1, width: '10%' }}>
        <SideNavBar Name={Name} UserID={UserID} />
      </div>
      <div style={{ marginRight: '30%' }}>
        <div>
          <Heading />
        </div>
        <div>
          <UserSubbedPlats Name={Name} UserID={UserID} />
        </div>
      </div>
    </div>
  );
};
export default SubscribeForm;

import React, { useState, useEffect } from 'react';
import UserSubbedPlats from '../components/SubscribeForm/UserSubbedPlats';
import queryString from 'query-string';
import NavBarComp from '../components/NavBarComp';

const SubscribeForm = ({ location }) => {
  const [UserID, setUserID] = useState(null);
  const [Name, setName] = useState(null);

  useEffect(() => {
    const { name, user_id } = queryString.parse(location.search);
    setName(name);
    console.log(name);

    setUserID(user_id);
  }, [location, Name]);
  const subscribeHandler = (plat_id) => {
    alert(plat_id);
  };

  const unsubscribeHandler = (plat_id) => {
    alert(plat_id);
  };

  return (
    <div>
      <NavBarComp Name={Name} UserID={UserID} />

      <UserSubbedPlats
        Name={Name}
        UserID={UserID}
        subscribeHandler={subscribeHandler}
        unsubscribeHandler={unsubscribeHandler}
      />
    </div>
  );
};
export default SubscribeForm;

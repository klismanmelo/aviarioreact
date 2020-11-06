import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const Dashborad: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    (async () => {
      const { data } = await api.get('/users');

      setUsers(data);
    })();
  },[])
  return (
      <h1>Hello Word</h1>
  );
};

export default Dashborad;

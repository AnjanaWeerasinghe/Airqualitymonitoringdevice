import React, { useEffect, useState } from 'react';
import Dashboard from './Dashbord';
import './App.css';
import { database } from './firebase';
import { ref, get } from "firebase/database";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(database, 'Gas value/sensor_data');
      try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log('Fetched data:', data); // Log fetched data
          setData(data);
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>WindSolutions</h1>
      <Dashboard data={data} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Dashboard from './Dashbord'; // Ensure the spelling is correct
import './App.css';
import { database } from './firebase';
import { ref, get, set } from "firebase/database";


function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(database, 'path/to/data');
      try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          console.log(snapshot.val());
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
      <Dashboard />
   
    </div>
  );
}


export default App;

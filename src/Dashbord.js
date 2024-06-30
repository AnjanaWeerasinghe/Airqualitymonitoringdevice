import React, { useState, useEffect } from 'react';
import Gauge from './Gauge';
import GaugeChart from 'react-gauge-chart';
import { database, ref, onValue } from './firebase';
import './Dashbord.css';

const TemperatureGauge = ({ value }) => {
  const labels = [];
  const angleStep = 180 / (labels.length - 1);

  return (
    <div className="temperature-gauge">
      <div className="gauge-container">
        <GaugeChart
          id="temperature"
          nrOfLevels={30}
          colors={['#00FF00', '#FFBF00', '#FF0000']}
          arcWidth={0.3}
          percent={value / 100}
        />
        <div className="gauge-title">Temperature</div>
        <div className="gauge-value">{value}°C</div>
        <div className="gauge-labels">
          {labels.map((label, i) => (
            <span
              key={i}
              className="gauge-label"
              style={{ transform: `rotate(${i * angleStep - 90}deg) translate(0, -50px)` }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [coValue, setCoValue] = useState(0);
  const [no2Value, setNo2Value] = useState(0);
  const [ch4Value, setCh4Value] = useState(0);
  const [nh3Value, setNh3Value] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [dustValue, setDustValue] = useState(0);

  useEffect(() => {
    const sensorDataRef = ref(database, 'Gas value/sensor_data');
    
    const unsubscribe = onValue(sensorDataRef, (snapshot) => {
      const data = snapshot.val();
      console.log('Fetched data:', data); // Log fetched data for debugging
      if (data) {
        setCoValue(data.CO || 0);
        setNo2Value(data.NO2 || 0);
        setCh4Value(data.CH4 || 0);
        setNh3Value(data.NH3 || 0);
        setTemperature(data.Temperature || 0);
        setDustValue(data.Dust || 0);
      } else {
        console.log('No data available');
      }
    }, (error) => {
      console.error('Error fetching data:', error);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="dashboard">
      <div className="gauges-row">
        <Gauge id="co" title="CO" value={coValue} />
        <Gauge id="no2" title="NO₂" value={no2Value} />
        <Gauge id="ch4" title="CH₄" value={ch4Value} />
        <Gauge id="nh3" title="NH₃" value={nh3Value} />
      </div>
      <div className="gauges-row">
        <TemperatureGauge value={temperature} />
        <div className="gauge-container">
          <Gauge id="dust" title="Dust Level" value={dustValue} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// src/components/Dashboard.js
import React, { useState } from 'react';
import Gauge from './Gauge';
import GaugeChart from 'react-gauge-chart';
import './Dashbord.css';

const TemperatureGauge = ({ value }) => {
  const labels = [];
  const angleStep = 180 / (labels.length - 1); // Calculate angle step based on labels

  return (
    <div className="temperature-gauge">
      <div className="gauge-container">
        <GaugeChart
          id="temperature"
          nrOfLevels={30} // Adjust to have more segments for better number positioning
          colors={['#00FF00', '#FFBF00', '#FF0000']}
          arcWidth={0.3}
          percent={value / 150}
        />
        <div className="gauge-title">
          Temperature
        </div>
        <div className="gauge-value">
          {value}°C
        </div>
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
  const [coValue, setCoValue] = useState(50);
  const [no2Value, setNo2Value] = useState(30);
  const [ch4Value, setCh4Value] = useState(70);
  const [nh3Value, setNh3Value] = useState(40);
  const [temperature, setTemperature] = useState(22.5);
  const [dustValue, setDustValue] = useState(60);

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

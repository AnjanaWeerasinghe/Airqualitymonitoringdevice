import React from 'react';
import GaugeChart from 'react-gauge-chart';

const Gauge = ({ id, title, value }) => {
  return (
    <div className="gauge-container">
      <GaugeChart 
        id={id}
        nrOfLevels={3}
        colors={['#00FF00', '#FFBF00', '#FF0000']}
        arcWidth={0.3}
        percent={value / 100}
      />
      <div className="gauge-title">
        {title}
      </div>
      <div className="gauge-value">
        Value: {value}
      </div>
    </div>
  );
};

export default Gauge;

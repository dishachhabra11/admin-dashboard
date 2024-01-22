import React from 'react';
import './Speedometer.css';

const Speedometer = ({ percentage }) => {
  const clipPathId = `clipPathMeter${percentage}`;

  return (
    <div className="speedometer-container">
      <h2>Speedometer</h2>
      <div className="meter">
        <svg width="200" height="100">
          <defs>
            <clipPath id={clipPathId}>
              <rect x="0" y="0" width={percentage * 2} height="100%" />
            </clipPath>
          </defs>
          <circle cx="100" cy="100" r="90" fill="#3498db" />
          <circle cx="100" cy="100" r="90" fill="#e74c3c" clipPath={`url(#${clipPathId})`} />
          <circle cx="100" cy="100" r="80" fill="#ffffff" />
        </svg>
        <div className="reading">{percentage}%</div>
      </div>
    </div>
  );
};

export default Speedometer;

import React from 'react';

import './ChartShowCase.css'; // Add responsive styling in this file

const ChartsShowcase = ({ frequencyData, categoryData, protocolData, eventTypeData }) => {
  return (
    <div className="charts-showcase">
      <span>Network Security Alerts Analysis</span>
      <p>
        This data represents network alerts captured from a security system, indicating various types of potential threats. The four charts help visualize this data:
      </p>
      <ul>
        <li><strong>Frequency Chart:</strong> Displays the number of alerts over time (x-axis: timestamp, y-axis: number of alerts).</li>
        <li><strong>Category Chart:</strong> Shows the count of alerts by their category, highlighting the types of potential threats detected.</li>
        <li><strong>Protocol Chart:</strong> Illustrates the distribution of alerts across different network protocols (e.g., TCP, UDP).</li>
        <li><strong>Event Type Chart:</strong> Breaks down the alerts by their event type (e.g., alert, SSH, DNS).</li>
      </ul>
      
    </div>
  );
};

export default ChartsShowcase;

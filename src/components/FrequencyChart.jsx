import React from 'react';
import { LineChart, Label, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p style={{ color: '#000000' }}>{`Timestamp: ${label}`}</p>
        <p style={{ color: '#000000' }}>{`Number of Frequencies: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const FrequencyChart = ({ data }) => {
  return (
    <div className="chart-container " id='f-chart'>
      <span> 
       Frequency Alert Over Time
      </span>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp">
            <Label value="Timestamp" offset={-40} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Number of Frequencies" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
          </YAxis>
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} offset={50} />
        </LineChart>
      </ResponsiveContainer>
      <p className="desc">
      The line graph represents the Frequency of events over time.
      The <strong>x-axis</strong> - typically represents timestamps,
       and the <strong>y-axis</strong> - represents the number of Frequency of events at each timestamp.
      </p>
    </div>
  );
}

export default FrequencyChart;

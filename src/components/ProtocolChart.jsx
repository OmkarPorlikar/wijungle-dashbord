import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const ProtocolChart = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF6666', '#00FF00', '#008080', '#800000', '#FF6347'];
  
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className='proto-tooltip'>
            <span style={{ color: '#000000' }}>{`${payload[0].payload.proto}: ${payload[0].value}`}</span>
          </p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="chart-container" id='p-chart'>  
    <span>Protocol Chart</span>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="proto"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <p className='desc'>
      The pie chart illustrates the proportion of events attributed to different protocols. 
      Each segment of the pie represents a protocol, and its size corresponds to the percentage of events associated with that protocol.
      </p>
    </div>
  );
}

export default ProtocolChart;

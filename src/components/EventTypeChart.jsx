import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// Aggregation function


// Example vibrant colors


const EventTypeChart = ({ data }) => {

  return (
    <div className="chart-container" id='e-chart'>
      <span> EventType Chart </span>

    <ResponsiveContainer width="100%" height={400}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="40%"
        outerRadius="80%"
        barSize={20}
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <RadialBar
          minAngle={15}
          background
          clockWise
          dataKey="count"
          isAnimationActive={true}
          animationBegin={400}
          animationDuration={1500}
          animationEasing="ease-out"
          label={{ position: 'insideStart', fill: '#fff' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          iconSize={20}
          fontSize={'12px'}
          layout="horizontal"
          verticalAlign="top"
          payload={data.map((item) => ({
            id: item.name,
            type: 'square',
            value: `${item.name}`,
            color: item.fill,
          }))}
        />
      </RadialBarChart>
    </ResponsiveContainer>
    <p className='desc'>
    The radial chart presents the distribution of events around a central point.
     Each bar, arranged radially, represents a distinct <strong> Event Type</strong>
    </p>
    </div>
  );
}

// Custom Tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, count } = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p>{`EventType:-${name}`}</p>
        <p>{`Count: ${count}`}</p>
      </div>
    );
  }
  return null;
}

export default EventTypeChart;

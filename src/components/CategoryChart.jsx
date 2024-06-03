import React from 'react';
import { BarChart, Bar, XAxis, Cell, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const colors = [
  '#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', '#ff69b4', '#ba55d3'
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const totalCount = payload[0].payload.totalCount;
    const percentage = ((payload[0].value / totalCount) * 100).toFixed(2);
    return (
      <div className="custom-tooltip">
        <p>{label}</p>
        <p>{`Count: ${payload[0].value}`}</p>
        <p>{`Percentage: ${percentage}%`}</p>
      </div>
    );
  }
  return null;
};

const CategoryChart = ({ data }) => {
  return (
    <div className="chart-container" id="c-chart">
            <span>Alerts by Category</span>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" interval={0} angle={-15} textAnchor="end">
            <Label value="Category" offset={-30} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Number of Alerts" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
          </YAxis>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="count" fill="transparent" animationDuration={1500}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="desc">
        The bar graph displays the distribution of events across different categories. Each bar represents a category, and its height indicates the count of events in that category. 
        The <strong> x-axis</strong> - shows the categories, and 
        the <strong>y-axis</strong> - represents the count of events.
      </p>
    </div>
  );
};

export default CategoryChart;

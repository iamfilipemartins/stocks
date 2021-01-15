import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const Graphic = ({data, dataKeyXAxis, lines}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="category" dataKey={dataKeyXAxis} />
        <YAxis type="number" />
        <Tooltip />
        {lines.map((line) => (
          <Line type="monotone" dataKey={line.dataKey} stroke={line.color} activeDot={{ r: 8 }} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

Graphic.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  lines: PropTypes.instanceOf(Array).isRequired,
  dataKeyXAxis: PropTypes.string.isRequired,
};


export default Graphic;

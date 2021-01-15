import * as React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../shared/colors';

const Loading = ({ width, height, color }) => (
  <svg class="svgLoader" viewBox={`0 0 ${width} ${height}`} width="10em" height="10em">
    <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill={color} transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
  </svg>
);

Loading.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

Loading.defaultProps = {
  width: 100,
  height: 100,
  color: colors.blueRoyal,
};

export default Loading;

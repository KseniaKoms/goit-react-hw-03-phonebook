import React from 'react';
import PropTypes from 'prop-types';
import Heading from './Title.styled';

const Title = ({ title }) => {
  return <Heading>{title}</Heading>;
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

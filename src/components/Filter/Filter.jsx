import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

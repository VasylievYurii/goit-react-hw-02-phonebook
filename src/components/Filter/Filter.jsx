import React from 'react';
import {FilterLabel, FilterInput, RiUserSearchLineSvg} from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      <FilterInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder='Name'
      />
      <RiUserSearchLineSvg/>
    </FilterLabel>
  );
};
